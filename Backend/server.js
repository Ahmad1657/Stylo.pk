const express = require("express");
const app=express();
require('dotenv').config()
const connectdb = require('./config/db')
const adminRoutes=require('./routes/index')
const PORT=process.env.PORT || 9000;
const cors=require('cors')

app.get("/",(req,res)=>{
    res.json({success:true,message:"Welcome to the Express",status:200});
})
connectdb();
app.use(express.json())
app.use(cors());
app.use("/api/admin",adminRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})