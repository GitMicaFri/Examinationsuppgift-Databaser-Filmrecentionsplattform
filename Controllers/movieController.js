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

// GET /movies/:id: Hämta detaljer för en specifik film.

// PUT /movies/:id: Uppdatera en specifik film.

// GET /movies/:id/reviews: Hämta alla recensioner för en specifik film.

// DELETE /movies/:id: Ta bort en specifik film.