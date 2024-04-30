const fsPromises = require('fs/promises');

const getUser = async(req,res)=>{
    res.status(501);
    res.json({
        status: 'fail',
        message:'Route is not yet implemented',
    });
}
const addUser = async(req,res)=>{
    res.status(501);
    res.json({
        status: 'fail',
        message:'Route is not yet implemented',
    });
}
const replaceUser = async(req,res)=>{
    res.status(501);
    res.json({
        status: 'fail',
        message:'Route is not yet implemented',
    });
}
const deleteUser = async(req,res)=>{
    res.status(501);
    res.json({
        status: 'fail',
        message:'Route is not yet implemented',
    });
}
module.exports ={
    getUser,
    addUser,
    replaceUser,
    deleteUser
}