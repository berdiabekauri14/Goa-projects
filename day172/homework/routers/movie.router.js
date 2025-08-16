const express = require("express")

const movieRouter = express.Router()

const { getMovies, getMovie, createMovie, deleteMovie, updateMovie } = require("../controllers/movie.controller.js")

movieRouter
    .route("/")
    .get(getMovies)
    .post(createMovie)

movieRouter
    .route("/:id")
    .get(getMovie)
    .delete(deleteMovie)
    .patch(updateMovie)

module.exports = movieRouter;