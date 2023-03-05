const { Product, ProductDetail } = require('../models/index.js');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.status(200).send({
            message: "Get all products successfully!",
            products
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to get all products!"
        })
    }
}

const orderProducts = async (req, res) => {
    const products = req.body
    try {
        for (const product of products) {
            const updatedProduct = await Product.findOne({
                where: {
                    id: product.id
                }
            });
            updatedProduct.stock -= product.quantity
            await updatedProduct.save();
        }

        res.status(200).send({
            message: "Ordered products successfully!",
            products
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to order all products!"
        })
    }
}

const addProduct = async (req, res) => {
    const { name, description, price, image, stock } = req.body

    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            image,
            stock
        })

        res.status(200).send({
            message: "Create the product successfully!",
            product: newProduct
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to add the product!"
        })
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    orderProducts
}