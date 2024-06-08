
const express = require('express')
const router = express.Router()
const movieController = require('../Controllers/movieController')

// här ska autentiseringen in för login

// baseURL: /api/movie
console.log(movieController);

router.post('/', async (req, res) => {
    try {
        await movieController.addNewMovie(req.body)
        res.status(200).send('Successfully added new movie.')

    } catch(err) {
        res.status(400).send(err)
    }
}
)
router.get('/', async (req, res) => {
    try {
        const allMovies = await movieController.getAllMovies()
       
        res.status(200).json({message: `Listing all movies`, allMovies})

    } catch(err) {
        res.status(400).send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const movieById = await movieController.getMovieById(req.params.id)
        res.status(200).json({message: `Here is your movie`, movieById})

    } catch(err) {
        res.status(400).send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await movieController.updateMovieById(req.params.id, req.body)

        if (!updatedMovie) {
            return res.status(404).send("Not found")
        }
        res.status(200).json({message: `Update completed`, updatedMovie})
        
    } catch(err) {
        res.status(400).send(err)
    }
}
)

router.delete('/:id', async (req, res) => {
    try {
        await movieController.deleteMovieById(req.params.id)
        
        res.status(200).json({message: `Movie deleted`})

    } catch(err) {
        res.status(400).send(err)
    }
})

router.get('/:id/reviews', async (req, res) => {
    try {
        const reviews = await movieController.getAllReviewsForMovieById(req.params.id)

        if (!reviews.length) {
            return res.status(404).json({message: `We could not find any reviews for the selected movie.`})
        }
        res.status(200).json(reviews)

    } catch(err) {
        res.status(400).json(err)
    }
})






module.exports = router