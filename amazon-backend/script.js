const express=require('express');
const productsRouter=require('./routes/productsroutes.js')
const userRouter=require('./routes/userroutes.js')
const reviewroute=require('./routes/reviewroute.js')
const app=express();
const productModel=require('./modules/productmodel.js')
const mongoose = require('mongoose');

app.use(express.json())

app.use('/api/products',productsRouter)
app.use('/api/user',userRouter)
app.use('/api/review',reviewroute)

const url="mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.l291sgt.mongodb.net/$_DBNAME_$?retryWrites=true&w=majority&appName=Cluster0"
const dataBaseUser="JATINGUPTA";
const dataBasePass="Jatin9456";
const dataBaseName="Amazon-backend";

let dbLink=url.replace('$_USERNAME_$',dataBaseUser);
dbLink=dbLink.replace('$_PASSWORD_$',dataBasePass);
dbLink=dbLink.replace('$_DBNAME_$',dataBaseName);


mongoose.connect(dbLink)
  .then(() => {console.log('------DataBase Connected!------');
})



app.listen(1700,()=>console.log('----------App Started!---------'));

   