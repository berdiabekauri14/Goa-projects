const express = require("express");

const app = express()

const { postRouter } = require("./routers/post.router.js")

app.use(postRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})