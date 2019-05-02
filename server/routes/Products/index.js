const express = require('express');
const router = express.Router();
const {ProductsRepo} = require('../../models/Product')
const {getAllProducts,saveProduct} = require('./products')

/**
 * @param {ProductsRepo} productsRepo - The repository for persistence and fetching of products.
 */
const controller = (productsRepo) => {
    const isProductsRepo = productsRepo instanceof ProductsRepo
    if (!isProductsRepo ){
        throw Error('Must provide an instance of ProductsRepo')
    }
    router.get('/', getAllProducts(productsRepo));

    router.post('/',saveProduct(productsRepo))

    return router
}

module.exports = controller

