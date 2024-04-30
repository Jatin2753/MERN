const express = require('express')
const fsPromises = require('fs/promises')
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')


const app = express();
app.use(express.json());

// app.use((req,res,next)=>{
//     // console.log(req.url)
//     const time = new Date().toLocaleString();
//     fsPromises.appendFile("./log.txt", req.url + '\t' + time +'\n');   

//     next();
// });

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);


// app.route('/api/products')
//     .get(productController.getAllProducts)
//     .post(productController.addProducts);

// app.route('/api/products:id')
//     .put(productController.replaceProducts)
//     .delete(productController.deleteProducts);

// app.route('/api/users')
//     .get(userController.getUser)
//     .post(userController.addUser)
//     .put(userController.replaceUser)
//     .delete(userController.deleteUser);

// //to get data and display on browser
// app.get('/api/recipes', productController.getAllProducts); 

// // for posting data on browser . for adding new data
// app.post('/api/recipes',productController.addProducts);

// // put request. for replacing data
// app.put('/api/recipes/:id', productController.replaceProducts)

// // delete request
// app.delete('/api/recipes/:id', productController.deleteProducts);

// app.get('/api/users', userController.getUser);

// app.post('/api/users', userController.addUser);

// app.put('/api/users', userController.replaceUser);

// app.delete('/api/users', userController.deleteUser);

app.listen(1500);