const express= require("express");
const { UserModel } = require("../Models/user.model");

userRouter= express.Router();

const bcrypt= require("bcrypt");

const jwt= require("jsonwebtoken");

userRouter.get("/user", async(req, res)=>{
    try {
        const data= await UserModel.find();
        res.send(data);
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while fetching the user data")
    }
})

userRouter.post("/register", async(req, res)=>{
    let data= req.body;
    try {
        if(data.name && data.email  && data.password){
            bcrypt.hash(data.password, 3, async(err, secured)=>{
                if(err){
                    console.log({"error": err});
                }else{
                    const userData= new UserModel({...data, password:secured});
                    await userData.save();
                    res.send("Registered")
                }
            })
        }else{
            res.send("Please provide all the Details")
        }
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while registering the user")
    }
})

userRouter.post("/login", async(req, res)=>{
    let data= req.body;
    try {
        const newData= await UserModel.find({email:data.email});
        if(newData.length>0){
            bcrypt.compare(data.password, newData[0].password, async(err, ans)=>{
                if(ans){
                    const token= jwt.sign({userId: newData[0]._id}, 'ticket');
                    res.send({"msg" : "Login Successful", "token": token});
                }else{
                    res.send("Wrong Password");
                }
            })
        }else{
            res.send("No User Found");
        }
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while Loggig in the user")
    }
})


module.exports= {
    userRouter
}