const Product=require("../models/product.model")

exports.store=async(req,res)=>{
    try{
        console.log(req.body)
        const product=await Product.create(req.body)
        res.json({status:200,message:"Product created successfully",product})
    }
    catch(err){
        console.log(err);
    }
}