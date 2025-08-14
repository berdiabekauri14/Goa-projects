const express = require("express")

const postRouter = express.Router()

const posts = [
    {id: 1, title: "About me", description: "my name is Ben"},
    {id: 2, title: "Meet my cat", description: "her name is bean :)"},
    {id: 3, title: "Moon in a telescope", description: "it so beutiful!"}
]

postRouter.get("/posts", (req, res) => {
    res.json(posts)
})

postRouter.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id)
    const post = posts.find(i => i.id === postId)

    if (post) {
        res.json(post)
    } else {
        res.status(404).json({error: "Error found"})
    }
})

postRouter.post("/posts", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400).json({note: "All fields must be filled"})
    }

    const newPost = {
        id: Date.now(),
        title,
        description
    }

    posts.push(newPost)

    res.json(posts)
})

module.exports = postRouter