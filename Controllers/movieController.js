const Movie = require('../Models/movieModel')

// POST /movies: Lägg till en ny film.
exports.addNewMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body)
        await newMovie.save()
        res.status(200).send('Successfully added new movie.')
    } catch(err) {
        res.status(400).send(err)
    }
}

// GET /movies: Hämta en lista med alla filmer.
exports.getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.status(200).json({message: `Listing all movies`, allMovies})
    } catch(err) {
        res.status(400).send(err)
    }
}

// GET /movies/:id: Hämta detaljer för en specifik film.
exports.getMovieById = async (req, res) => {
    try {
        const movieById = await Movie.findById(req.params.id)
        res.status(200).json({message: `Here is your movie`, movieById})
    } catch(err) {
        res.status(400).send(err)
    }
}

// PUT /movies/:id: Uppdatera en specifik film.
exports.updateMovieById = async (req, res) => {
    try {
        const updateMovie = await Movie.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new: true} // options: returnerar updaterat dokument
            )
            if (!updateMovie) {
                return res.status(404).send("Not found")
            }
            res.status(200).json({message: `Update completed`, updateMovie})
        
    } catch(err) {
        res.status(400).send(err)
    }
}

// GET /movies/:id/reviews: Hämta alla recensioner för en specifik film.

// DELETE /movies/:id: Ta bort en specifik film.