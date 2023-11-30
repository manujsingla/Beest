const express=require('express');
const app=express();
require("dotenv").config();

app.use(express.json());

const PORT =process.env.PORT || 3000;

const dbConnect=require("./config/database");
dbConnect();

const productRoutes=require("./routes/productRoutes");
app.use("/api",productRoutes)

// const reviewRoutes=require("./routes/reviewRoutes");
// app.use("/api",reviewRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})