const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image:[String],
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:new Date(),
    }
})


const userModel=mongoose.model('user',userSchema)

module.exports=userModel;

