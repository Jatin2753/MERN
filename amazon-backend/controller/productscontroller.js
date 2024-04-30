const productModel=require('../modules/productmodel.js')

const getAllProducts=async(req,res)=>{
    try{
        const {sort='price',page =1,pageSize = 3,fields='-images',...q}=req.query;
        const sortstr=sort.split(',').join(' ');
        const filedsstr=fields.split(',').join(' ');
        let query = productModel.find(q)
        console.log(sortstr);
        const skip=pageSize*(page -1);
        const limit = 3;
        query =query.skip(skip).limit(limit);
        query=query.select(filedsstr)
        const products = await query;
        const totalResults=await productModel.countDocuments()
        res.send({                                  
            "status":"success",
            "results":products.length,
             totalResults,
         pageSize,
            page,
            data:{
                products,             
            }
        })
    }
    catch(err){
        console.log(err)
    }
    
}

const addProduct=async(req,res)=>{
    try{
        console.log(req.body)
        const {_id,...data}=await productModel.create(req.body)
         res.json({
            status:'success',
            result:1,
            data:{
                product:data
            }
         })
    }
    catch(err){
       res.status(403)
       console.log(err)
        res.json({
            status:'fail',
            result:1,
            data:{
                product:JSON.stringify(err)
            }
         })
    }
    
}

const replaceProduct=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
         const rep=await productModel.findOneAndReplace({_id:reqid},data)
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
            product:JSON.stringify(err)
        }
     })
   }
}

const deleteProduct=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await productModel.findByIdAndDelete({_id:reqid})
        if (!deleteProduct) {
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


const editProduct=async(req,res)=>{
    try{
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await productModel.findByIdAndUpdate({_id:reqid},data)
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
   getAllProducts,
   addProduct,
   replaceProduct,
   deleteProduct,
   editProduct
}






// also make same for reviews , orders, cart 