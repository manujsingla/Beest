const express=require('express');
const router=express.Router();

const{createProduct}=require("../controllers/createProduct");
const{getProduct,getProductById}=require("../controllers/getProduct");
const{updateProduct}=require("../controllers/updateProduct");
const{deleteProduct}=require("../controllers/deleteProduct");

router.post("/createProduct",createProduct);
router.get("/getProduct",getProduct);
router.get("/getProduct/:id",getProductById);
router.put("/updateProduct/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);

module.exports=router;