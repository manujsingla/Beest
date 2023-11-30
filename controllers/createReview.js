const Review=require('../models/product');

exports.createReview=async(req,res)=>{
    try{
     const{content,rating,author,createdAt}=req.body;

     const pro= await Review.create({content,rating,author,createdAt});
     
     res.status(200).json({
        success:true,
        data:review,
        message:"Entry created successfully"
     })

    }catch(error){
     res.status(500).json({
        success:false,
        data:"Internal server error",
        message:error.message
    })
    }
}