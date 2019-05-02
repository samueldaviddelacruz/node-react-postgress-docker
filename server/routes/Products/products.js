const { validate } = require("../../util/requestValidator");
module.exports = {
  saveProduct: productsRepo => {
    return async (req, res, next) => {
      const errors = validate.bodyFieldsAreNotEmpty(
        req.body,
        "description",
        "price"
      );
      if (errors.length) {
        return res.status(422).json({ errors });
      }

      const { description, price } = req.body;

      await productsRepo.save(description, price);

      res.status(201).send({ message: "product saved" });
    };
  },
  getAllProducts: productsRepo => {
    return async (req, res) => {
      const products = await productsRepo.list();

      res.send(products);
    };
  }
};
