const express = require('express')
const router = express.Router()
const movieController = require('../Controllers/movieController')

// baseURL: /api/movie

router.post('/', movieController.addNewMovie)
router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)
router.put('/:id', movieController.updateMovieById)


module.exports = router