const express=require('express')
const usercontroller=require('../controller/usercontroller.js')
const userRouter=express.Router();

userRouter.route('/')
.get(usercontroller.getuser)
 .post(usercontroller.adduser)

userRouter.route('/:id')
 .put(usercontroller.replaceuser)
 .delete(usercontroller.deleteUser)
 .patch(usercontroller.editUser)

module.exports=userRouter