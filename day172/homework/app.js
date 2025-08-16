const express = require("express")

const app = express()

const { movieRoute } = require("./routers/movie.router.js")

app.use(express.json())

app.use("/movies", movieRoute)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})