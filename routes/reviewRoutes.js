const express=require('express');
const router=express.Router();

const{createReview}=require("../controllers/createReview");
const{getReview,getReviewById}=require("../controllers/getReview");
const{updateReview}=require("../controllers/updateReview");
const{deleteReview}=require("../controllers/deleteReview");

router.post("/createReview",createReview);
router.get("/getReview",getReview);
router.get("/getReview/:id",getReviewById);
router.put("/updateReview/:id",updateReview);
router.delete("/deleteReview/:id",deleteReview);

module.exports=router;