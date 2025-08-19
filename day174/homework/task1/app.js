const express = require("express")
const morgan = require("morgan")

const app = express()

require("dotenv").config();

app.use(express.json())

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.get("/morganAndEnv", (req, res) => {
    res.send(process.env.NODE_ENV);
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000")
})