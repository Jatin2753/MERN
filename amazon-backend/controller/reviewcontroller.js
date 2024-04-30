const reviewModel = require('../modules/reviewmodel.js');

const getreview = async (req, res) => {
    try {
        const data = await reviewModel.find();
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                data,
            }
        });
    } catch (error) {
        console.error(error);
    }
};

const postreview = async (req, res) => {
    try {
       const data=await reviewModel.create(req.body)
        res.json({
            status: 'success',
            results:1,
            data: {
               data,
            }
        });
    } catch (error) {
        console.error(error);
        res.json({
            status: 'fail',
            results: 1,
            data: {
                reviews: data,
            }
        });
    }
};

const replacereview = async (req, res) => {
    try {
        const reqid=req.params.id
        const data={...req.body,reqid} 
         const rep=await reviewModel.findOneAndReplace({_id:reqid},data)
        res.json({
            status: 'success',
            results:1,
            data: {
               data,
            }
        });
    } catch (error) {
        console.error(error);
        res.json({
            status: 'fail',
            results: 1,
            data: {
                reviews: data,
            }
        });
    }
};

const deletereview = async (req, res) => {
    try {
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await reviewModel.findByIdAndDelete({_id:reqid})
        if (!deletereview) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        res.json({
            status: 'success',
            results: 1,
            data: {
                reviews: data,
            }
        });
    } catch (error) {
        console.error(error);
        res.json({
            status: 'fail',
            results: 1,
            data: {
                reviews: data,
            }
        });
    }
};

const editreview = async (req, res) => {
    try {
        const reqid=req.params.id
        const data={...req.body,reqid} 
        const result=await reviewModel.findByIdAndUpdate({_id:reqid},data)
        res.json({
            status: 'success',
            results: 1,
            data: {
                reviews: data,
            }
        });
        }
      
    catch (error) {
        console.error(error);
        res.json({
            status: 'fail',
            results: 1,
            data: {
                reviews: data,
            }
        });
    }
};



module.exports = {
    getreview, 
    postreview,
    replacereview,
    deletereview,
    editreview
};
