const { Product, Brand } = require('../models')

class ProductController {

    static async get(req, res) {
        try {
            const products = await Product.findAll({ include: Brand })
            res.status(200).json(products)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async getById(req, res) {
        try {
            const product = await Product.findByPk(+req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async post(req, res) {
        try {
            const brand = await Brand.findByPk(+req.body.brandId)
            if (!brand) {
                res.status(200).json({ message: 'Brand not found' })
            } else {
                const newProduct = {
                    name: req.body.name,
                    picture: req.body.picture,
                    price: +req.body.price,
                    BrandId: +req.body.brandId
                }

                const addProduct = await Product.create(newProduct)
                res.status(201).json(addProduct)
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async put(req, res) {
        try {
            const newProduct = {
                name: req.body.name,
                picture: req.body.picture,
                price: +req.body.price,
                BrandId: +req.body.brandId
            }

            const updateProduct = await Product.update(newProduct, {
                where: { id: req.params.id }
            })

            res.status(201).json(updateProduct)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const deleteProduct = await Product.destroy({
                where: {
                    id: +req.params.id
                }
            })
            if (deleteProduct) {
                res.status(201).json({
                    message: 'Success delete Product'
                })
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController