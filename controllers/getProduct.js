const Product=require('../models/product');

exports.getProduct=async(req,res)=>{
    try{
        const products=await Product.find({});

        res.status(200).json({
            success:true,
            data:product,
            message:"Data fetched successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
   
}


exports.getProductById=async(req,res)=>{
    try{
        const{id}=req.params;
        const product=await Product.findById({_id:id});

        if(!product){
          return res.status(404).json({
            success:false,
            message:"No data with given id"
          })
        }

        res.status(200).json({
            success:true,
            data:product,
            message:"Data fetched with given id"
        })
    }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
    }
}