const express = require('express');
const { getAllProducts, addProduct, orderProducts } = require("../controllers/product_controller.js");

const productRouter = express.Router();

productRouter.get('/getallproducts', getAllProducts)
productRouter.post('/addproduct', addProduct)
productRouter.put('/orderproduct', orderProducts)

module.exports = {
    productRouter
}