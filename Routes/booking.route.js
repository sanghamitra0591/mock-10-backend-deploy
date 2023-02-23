const express= require("express");
const { BookingModel } = require("../Models/booking.model");

bookingRouter= express.Router();

bookingRouter.get("/dashboard", async(req, res)=>{
    const query= req.query;
    try {
        const data= await BookingModel.find(query);
        res.send(data);
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while fetching booking data")
    }
})

bookingRouter.post("/booking", async(req, res)=>{
    let data= req.body;
    let userId= req.body.userId;
    try {
        if(userId && data.flight){
            const newData= new BookingModel({user: userId, flight: data.flight});
            await newData.save();
            res.send("Added new Booking");
        }else{
            res.send("Please provide all the Details")
        }
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while adding new booking")
    }
})

module.exports= {
    bookingRouter
}