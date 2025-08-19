const express = require("express");

const app = express();

const { hotelRouter } = require("./routers/hotel.router.js");

app.use(express.json());

app.use("/hotels", hotelRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})