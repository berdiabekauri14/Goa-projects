const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Crime"
    },
    {
        id: 3,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime"
    },
    {
        id: 5,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action"
    }
]

const getMovies = (req, res) => {
    res.json(movies)
}

const getMovie = (req, res) => {
    const movieId = parseInt(req.params.id)
    const movie = movies.find(el => el === movieId * 1)

    if (!movie) {
        return res.status(404).json({
            status: "fail",
            message: "404 not found"
        })
    } else {
        res.json(movie)
    }
}

const createMovie = (req, res) => {
    const { title, year, genre } = req.body

    if (!title || !year || !genre) {
        return res.status(400).json({
            status: "something missing",
            message: "Title, year and genre is required!"
        })
    }

    const newMovie = {
        id: movies[movies.length - 1] + 1,
        title,
        year,
        genre
    }

    movies.push(newMovie)

    res.json(movies)
}

const deleteMovie = (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex(el => el.id === id * 1);

    if (movieIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Post cant be found!"
        });
    }

    movies.splice(movieIndex, 1);

    res.status(204).send();
}

const updateMovie = (req, res) => {
    const { id } = req.params
    const { title, year, genre } = req.body;

    const movie = movies.find(el => el === id * 1)

    if (!movie) {
        return res.status(404).json({
            status: "fail",
            message: "404 not found"
        })
    }

    if(title) movie.title = title;
    if(year) movie.year = year;
    if(genre) movie.genre = genre;

    res.json(post);
}

module.exports = { getMovies, getMovie, createMovie, deleteMovie, updateMovie }