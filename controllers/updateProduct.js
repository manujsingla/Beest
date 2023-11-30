const Product=require('../models/product');

exports.updateProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const{name,description,price,category}=req.body;

        const product=await Product.findByIdAndUpdate({_id:id},{name,description,price,category})

        const updatedProduct=await Product.findById({_id:id});
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