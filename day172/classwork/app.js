const express = require("express")

const app = express()

const { postRoute } = require("./routers/post.router.js")

app.use(express.json())

app.use("/posts", postRoute)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})