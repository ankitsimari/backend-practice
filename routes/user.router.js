const express = require('express');
const { userModel } = require('../model/user.model');
const userRouter = express.Router();


userRouter.get("/",async(req,res)=>{
    try{
       const user = await userModel.find();
       res.status(200).send({"user":user})
    }
    catch(err){
        res.status(400).send({"error":err})
    }
});



userRouter.post("/signup",async(req,res)=>{
    try{
        const user = new userModel(req.body);
       await user.save();
       res.status(200).send({"user Added":user})
    }
    catch(err){
        res.status(400).send({"error":err})
    }
});


userRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const user = await userModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"user Update":user})
    } 
    catch(err){
        res.status(400).send({"error":err})
    }
})


userRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const user = await userModel.findByIdAndDelete({_id:id})
        res.status(200).send({"user Deleted":user})
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})


module.exports={userRouter}