const express = require('express');
const { productRouter } = require('./product_router.js');

const rootRouter = express.Router();

rootRouter.use('/products', productRouter);

module.exports = {
    rootRouter
}