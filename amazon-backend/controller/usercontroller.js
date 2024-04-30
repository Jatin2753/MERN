const userModel = require('../modules/usermodel.js')


const getuser=async(req,res)=>{
    try{
        const data=await userModel.find()
        res.send({
         "status":"success",
         "results":0,
         data:{
             products:data,
         }
     })
    }
   catch(err){
    console.log(err)
   }
}

const adduser=async(req,res)=>{
    try{
        const data=await userModel.create(req.body)
        res.json({
            status:'success',
            result:1,
            data:{
                user:data
            }
        })
    }
     catch(err){
        console.log(err)
        res.json({
            status:'fail',
            result:1,
            data:{
                user:data
            }
        })
     }
}

const replaceuser=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
         const rep=await userModel.findOneAndReplace({_id:reqid},data)
        res.json({
            status:'success',
            result:1,
            data:{
                user:data
            }
        })
    }
     catch(err){
        console.log(err)
        res.json({
            status:'fail',
            result:1,
            data:{
                user:data
            }
        })
     }
}

const deleteUser=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await userModel.findByIdAndDelete({_id:reqid})
        if (!deleteUser) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
    
        res.json({
            status:'success',
            result:1,
            data:{
                product:null
            }
         })
    }
    catch(err){
        console.log(err)
        res.json({
            status:'failed',
            result:1,
            data:{
                product:null
            }
         })
    }
    
}


const editUser=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await userModel.findByIdAndUpdate({_id:reqid},data)
        res.json({
            status:'success',
            result:1,
            data:{
                product:data
            }
        })
    }
   catch(err){
      console.log(err)
      res.json({
        status:'fail',
        result:1,
        data:{
            product:data
        }
    })
   }
}



module.exports={
    getuser,
    adduser,
    replaceuser,
    deleteUser,
    editUser
}