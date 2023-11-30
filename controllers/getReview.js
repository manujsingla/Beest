const Review=require('../models/product');

exports.getReview=async(req,res)=>{
    try{
        const Reviews=await Review.find({});

        res.status(200).json({
            success:true,
            data:review,
            message:"Data fetched successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
   
}


exports.getReviewById=async(req,res)=>{
    try{
        const{id}=req.params;
        const review=await Review.findById({_id:id});

        if(!review){
          return res.status(404).json({
            success:false,
            message:"No data with given id"
          })
        }

        res.status(200).json({
            success:true,
            data:student,
            message:"Data fetched with given id"
        })
    }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
    }
}