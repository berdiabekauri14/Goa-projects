const express = require("express")

const app = express()

const { carsRouter } = require("./routers/cars.router.js")

app.use("/cars", carsRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})