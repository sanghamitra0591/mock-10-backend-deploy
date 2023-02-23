const express= require("express");
const { FlightModel } = require("../Models/flight.model");

flightRouter= express.Router();

flightRouter.get("/", async(req, res)=>{
    const query= req.query;
    try {
        const data= await FlightModel.find(query);
        res.send(data);
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while fetching the flight data")
    }
})

flightRouter.post("/", async(req, res)=>{
    let data= req.body;
    try {
        if(data.airline && data.flightNo && data.departure && data.arrival && data.departureTime && 
            data.arrivalTime && data.seats && data.price){
            const newData= new FlightModel(data);
            await newData.save();
            res.send("Added new Flight");
        }else{
            res.send("Please provide all the Details")
        }
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while adding the flight data")
    }
})

flightRouter.get("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        const data= await FlightModel.find({_id : id});
        if(data.length>0){
            res.send(data);
        }else{
            res.send("No Flights Found with this id");
        }
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while fetching the flight data");
    }
})

flightRouter.patch("/:id", async(req, res)=>{
    const id= req.params.id;
    const data= req.body;
    try {
       await FlightModel.findByIdAndUpdate({_id : id}, data);
       res.send(`Updated Flight with id ${id}`);
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while updating the flight data")
    }
})

flightRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
       await FlightModel.findByIdAndDelete({_id : id});
       res.send(`Deleted Flight with id ${id}`);
    } catch (error) {
        console.log({"error": error});
        res.send("Found error while deleting the flight data")
    }
})



module.exports= {
    flightRouter
}