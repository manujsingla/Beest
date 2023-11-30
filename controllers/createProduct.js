const Product=require('../models/product');

exports.createProduct=async(req,res)=>{
    try{
     const{name,description,price,category}=req.body;

     const pro= await Product.create({name,description,price,category});
     
     res.status(200).json({
        success:true,
        data:product,
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