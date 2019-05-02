const keys = require("../keys");
const { ProductsRepo } = require("../models/Product");
const { Pool } = require("pg");
const uuidv4 = require("uuid");
const initDbQuery = `
        CREATE TABLE IF NOT EXISTS products (
            id VARCHAR (128) PRIMARY KEY,
            description VARCHAR (128),
            price INT
        )
`;
class pgProduct extends ProductsRepo {
  constructor() {
    super();
    // Postgres Client Setup
    this.pgClient = new Pool({
      user: keys.pgUser,
      host: keys.pgHost,
      database: keys.pgDatabase,
      password: keys.pgPassword,
      port: keys.pgPort
    });

    this.pgClient.on("error", () => console.log("Lost PG connection"));

    this.pgClient.query(initDbQuery).catch(err => console.log(err));
  }

  async save(description, price) {
   
    try {
      const query = `
      INSERT INTO products(id,description,price) VALUES($1,$2,$3)
      `;
      const id = uuidv4();
      this.pgClient.query(query, [id, description, price]);
    } catch (err) {
      console.log(err)
    }
  }
  async list() {
    const results = await this.pgClient.query("SELECT * from products");
    return results.rows;
  }
}

module.exports = pgProduct;
