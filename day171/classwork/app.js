const express = require("express")

const app = express()

const { userRouter } = require("./routers/user.router.js")
const { postRouter } = require("./routers/post.router.js")

app.use(userRouter)

app.use(postRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})