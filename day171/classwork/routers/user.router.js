const express = require("express")

const userRouter = express.Router()

const users = []

userRouter.get("/user", (req, res) => {
    res.json(users)
})

userRouter.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(i => i.id === userId)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({error: "Error has been found"})
    }
})

userRouter.post("/user", express.json(), (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({note: "all fields must be filled"})
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    }

    users.push(newUser)

    res.json(users)
})

module.exports = userRouter;