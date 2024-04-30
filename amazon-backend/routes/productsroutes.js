const express=require('express')
const productsController=require('../controller/productscontroller.js')
const productRouter=express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)

productRouter.route('/:id')
.put(productsController.replaceProduct)
.delete(productsController.deleteProduct)
.patch(productsController.editProduct)

module.exports=productRouter