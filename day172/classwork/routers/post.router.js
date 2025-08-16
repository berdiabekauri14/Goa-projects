const express = require("express")

const postRoute = express.Router()

const { getPosts, getPost, createPost, deletePost, updatePost } = require("../controllers/post.controller.js")

postRoute
    .route("/")
    .get(getPosts)
    .post(createPost)

postRoute
    .route("/:id")
    .get(getPost)
    .delete(deletePost)
    .patch(updatePost)

module.exports = postRoute