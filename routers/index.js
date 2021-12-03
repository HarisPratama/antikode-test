const BrandController = require('../controllers/BrandContoller')
const OutletController = require('../controllers/OutletController')
const ProductController = require('../controllers/ProductController')

const router = require('express').Router()

router.get('/brand', BrandController.get)
router.post('/brand', BrandController.post)
router.get('/brand/:id', BrandController.getById)
router.put('/brand/:id', BrandController.put)
router.delete('/brand/:id', BrandController.delete)

router.get('/outlet', OutletController.get)
router.post('/outlet', OutletController.post)
router.get('/outlet/:id', OutletController.getById)
router.put('/outlet/:id', OutletController.put)
router.delete('/outlet/:id', OutletController.delete)

router.get('/product', ProductController.get)
router.post('/product', ProductController.post)
router.get('/product/:id', ProductController.getById)
router.put('/product/:id', ProductController.put)
router.delete('/product/:id', ProductController.delete)

module.exports = router
