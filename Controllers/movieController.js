const Movie = require('../Models/movieModel')
const Review = require('../Models/reviewModel')

// POST /movies: Lägg till en ny film.
const addNewMovie = async (payload) => {
    const newMovie = new Movie(payload)
    await newMovie.save()
}

// GET /movies: Hämta en lista med alla filmer.
const getAllMovies = async () => {
    const allMovies = await Movie.find()
    return allMovies
}

// GET /movies/:id: Hämta detaljer för en specifik film.
const getMovieById = async (movieId) => {
    const movieById = await Movie.findById(movieId)
    return movieById
}

// PUT /movies/:id: Uppdatera en specifik film.
const updateMovieById = async (movieId, payload) => {
    const updatedMovie = await Movie.findOneAndUpdate(
        { _id: movieId },
        payload,
        {new: true} // options: returnerar updaterat dokument
    )
    return updatedMovie
}

// DELETE /movies/:id: Ta bort en specifik film.
const deleteMovieById = async (movieId) => {
    await Movie.findOneAndDelete({ _id: movieId})
}

// GET /movies/:id/reviews: Hämta alla recensioner för en specifik film.
const getAllReviewsForMovieById = async (movieId) => {
    const reviews = await Review.find({ movieId: movieId })
    return reviews
}

// GET /movies/ratings: Hämta en lista med alla filmer och ratings

module.exports = {
    getAllMovies,
    addNewMovie,
    getMovieById,
    updateMovieById,
    getAllReviewsForMovieById,
    deleteMovieById,
}
