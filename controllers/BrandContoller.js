const { Brand, Outlet, Product } = require('../models')

class BrandController {

    static async get(req, res) {
        try {
            const brands = await Brand.findAll({ include: [Outlet, Product] })
            res.status(200).json(brands)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async getById(req, res) {
        try {
            const brand = await Brand.findByPk(+req.params.id)
            res.status(200).json(brand)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async post(req, res) {
        try {
            const newBrand = {
                name: req.body.name,
                logo: req.body.logo,
                banner: req.body.banner,
            }

            const addBrand = await Brand.create(newBrand)
            res.status(201).json(addBrand)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async put(req, res) {
        try {
            const newBrand = {
                name: req.body.name,
                logo: req.body.logo,
                banner: req.body.banner,
            }

            const updateBrand = await Brand.update(newBrand, {
                where: { id: req.params.id }
            })

            res.status(201).json(updateBrand)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const deleteBrand = await Brand.destroy({
                where: {
                    id: +req.params.id
                }
            })
            if (deleteBrand) {
                res.status(201).json({
                    message: 'Success delete Brand'
                })
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = BrandController