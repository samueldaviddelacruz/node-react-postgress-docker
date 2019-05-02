const { ProductsRepo } = require("../../models/Product");
const {
  getAllProducts,
  saveProduct
} = require("../../routes/Products/products");
class mockProductsDb extends ProductsRepo {
  async delete(id) {}
  async getById(id) {}
  async list() {
    return [
      { id: "123", description: "mock", price: 10 },
      { id: "456", description: "mock2", price: 20 }
    ];
  }
}

let req = {
  body: {}
};

let res = {
  sendCalledWith: "",
  statusCalledWith: "",
  send: function(arg) {
    this.sendCalledWith = arg;
  },
  status(arg) {
    this.statusCalledWith = arg;
    return this;
  },
  json(arg){
    return JSON.stringify(arg)
  }
};

describe("Products Route", function() {
  describe("saveProduct() function", function() {
    it("Should return a List of products given a valid repository", async function() {
      await getAllProducts(new mockProductsDb())(req, res);
      expect(res.sendCalledWith).toBeTruthy();
      expect(res.sendCalledWith.length).toBeGreaterThan(0);
    });
  });

  describe("saveProduct() function", function() {
    it("Should return an error list when no description or price is provided", async function() {
      await saveProduct(new mockProductsDb())(req, res);
      expect(res.sendCalledWith).toBeTruthy();
      expect(res.statusCalledWith).toBe(422)
      expect(res.sendCalledWith.length).toBeGreaterThan(0);
    });
  });
});
