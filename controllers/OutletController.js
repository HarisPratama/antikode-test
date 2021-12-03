const { Outlet, Brand, Sequelize } = require('../models')

class OutletController {

    static async get(req, res) {
        try {
            const monasLocation = {
                lng: 106.82723096241389,
                lat: -6.172744831288087
            }
            const location = Sequelize.literal(`ST_GeomFromText('POINT(${monasLocation.lng} ${monasLocation.lat})', 4326)`);

            var distance = Sequelize.fn('ST_Distance_Sphere', Sequelize.literal('position'), location);

            const outlets = await Outlet.findAll({
                attributes: {
                    include: [[Sequelize.fn('ST_Distance_Sphere', Sequelize.literal('position'), location), 'distance']]
                },
                order: distance,
                include: Brand,
            })
            res.status(200).json(outlets)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async getById(req, res) {
        try {
            const outlet = await Outlet.findByPk(+req.params.id)
            res.status(200).json(outlet)
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
                const newOutlet = {
                    name: req.body.name,
                    picture: req.body.picture,
                    address: req.body.address,
                    longitude: +String(req.body.longitude).substring(0, 10),
                    latitude: +req.body.latitude,
                    position: { type: 'Point', coordinates: [+req.body.longitude, +req.body.latitude] },
                    BrandId: +req.body.brandId
                }

                const addOutlet = await Outlet.create(newOutlet)
                res.status(201).json(addOutlet)
            }
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async put(req, res) {
        try {
            const newOutlet = {
                name: req.body.name,
                picture: req.body.picture,
                address: req.body.address,
                longitude: +req.body.longitude,
                latitude: +req.body.latitude,
                position: { type: 'Point', coordinates: [+req.body.longitude, +req.body.latitude] },
                BrandId: +req.body.brandId
            }

            const updateOutlet = await Outlet.update(newOutlet, {
                where: { id: req.params.id }
            })

            res.status(201).json(updateOutlet)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const deleteOutlet = await Outlet.destroy({
                where: {
                    id: +req.params.id
                }
            })
            if (deleteOutlet) {
                res.status(201).json({
                    message: 'Success delete Outlet'
                })
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = OutletController