const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({
        content:{
            type:String
        },
        rating:{
            type:Number
        },
        author:{
            type:String
        },
        createdAt:{
            type:String
        }
})

module.exports=mongoose.model("Review",reviewSchema);