/**
 * A Product
 * @typedef {Object} Product
 * @property {string} id - The product id.
 * @property {string} description - Product description.
 * @property {number} price - Product price.
 */

class ProductsRepo {
  /**
   * Creates/Saves a product into the database
   * @param {number} description - Product description
   * @param {number} price - Product price.
   */
  async save(description, price) {
    throw Error("Must implemented on derived class");
  }
  /**
   * Deletes a product from the database
   * @param {string} id - Id of the product to be deleted.
   */
  async delete(id) {
    throw Error("Must implemented on derived class");
  }
  /**
   * Gets a list of the products on the database
   * @returns {Product[]} List of products
   */
  async list() {
    throw Error("Must implemented on derived class");
  }
  async getById(id) {
    throw Error("Must implemented on derived class");
  }
}

module.exports = { ProductsRepo };
