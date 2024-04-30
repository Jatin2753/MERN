const mongoose=require('mongoose')
const reviewSchema=mongoose.Schema({
    // userId: {
    //     type:mongoose.Schema.type.ObjetID,
    //     ref:'users'
    // },
    title:{
         type:String,
         required:true
    },
    rating:{
         type:Number,
         required:true
    },
    description:{
       type:String,
    },
    img:[String],
    createdAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }
})


const reviewModel=mongoose.model('review',reviewSchema)

module.exports=reviewModel;

