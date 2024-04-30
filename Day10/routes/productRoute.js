const express = require('express');

const productController = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProducts); 

productRouter.route('/:id')
.put(productController.replaceProducts)
.delete(productController.deleteProducts);

module.exports = productRouter;    