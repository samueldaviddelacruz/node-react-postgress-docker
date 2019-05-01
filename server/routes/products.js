const express = require('express');
let router = express.Router();
const {ProductsRepo} = require('../models/Product')


/**
 * @param {ProductsRepo} productsRepo - The repository for persistence and fetching of products.
 */
const controller = (productsRepo) => {
    const isProductsRepo = productsRepo instanceof ProductsRepo
    if (!isProductsRepo ){
        throw Error('Must provide an instance of ProductsRepo')
    }
    router.get('/', async (req, res, next) => {
        
        const products = await productsRepo.list()

        res.send(products)
    });

    router.post('/', async (req, res, next) => {
        const body = req.body;
       
        await productsRepo.save(body.description,body.price)

        res.status(202).send({message:'product saved'})
    })

    return router
}
module.exports = controller

