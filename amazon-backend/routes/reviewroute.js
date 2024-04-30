const express=require('express')
const reviewController=require('../controller/reviewcontroller.js')
const reviewRouter=express.Router();

reviewRouter.route('/')
.get(reviewController.getreview)
 .post(reviewController.postreview)

reviewRouter.route('/:id')
 .put(reviewController.replacereview)
 .delete(reviewController.deletereview)
 .patch(reviewController.editreview)

module.exports=reviewRouter