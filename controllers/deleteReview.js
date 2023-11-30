const Review=require('../models/product');

exports.deleteReview=async(req,res)=>{
    try{
        const{id}=req.params;
        const pro=await Review.findByIdAndDelete({_id:id});
        if(!pro){
            res.status(404).json({
                success:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}