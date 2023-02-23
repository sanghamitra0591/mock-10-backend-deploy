const express= require("express");
const { connection } = require("./Configs/db");
const { validate } = require("./Middlewares/validate.middleware");
const { bookingRouter } = require("./Routes/booking.route");
const { flightRouter } = require("./Routes/flight.route");
const { userRouter } = require("./Routes/user.route");

const app= express();

app.use(express.json());

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Home Page")
})

app.use("/api/", userRouter);

app.use(validate);

app.use("/api/flights", flightRouter);

app.use("/api/", bookingRouter);




app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log({"error": error});
    }
    console.log(`Running at port ${process.env.port}`)
})

module.exports= app