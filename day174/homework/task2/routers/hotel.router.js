const express = require("express");

const hotelRouter = express.Router()

const { getHotels, getHotel, createHotel, deleteHotel, updateHotel } = require("../controller/hotel.controller.js")

hotelRouter
    .route("/")
    .get(getHotels)
    .createHotel(createHotel)

hotelRouter
    .route("/:id")
    .get(getHotel)
    .delete(deleteHotel)
    .patch(updateHotel)

module.exports = hotelRouter;