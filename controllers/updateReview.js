const Review=require('../models/product');

exports.updateReview=async(req,res)=>{
    try{
        const{id}=req.params;
        const{content,rating,author,createdAt}=req.body;

        const review=await Review.findByIdAndUpdate({_id:id},{content,rating,author,createdAt})

        const updatedReview=await Review.findById({_id:id});
        res.status(200).json({
            success:true,
            data:updatedProduct,
            message:"Entry updated successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}