const {Router}= require('express')
const controller = require('./controller')

const router= Router();

 router.get("/",  controller.getProducts)
 router.post("/", controller.addProduct)
router.get("/:id", controller.getProductsById)


//  router.get("/",  controller.getCategories)

 module.exports = router;