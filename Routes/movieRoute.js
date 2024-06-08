
const express = require('express')
const router = express.Router()
const movieController = require('../Controllers/movieController')

// här ska autentiseringen in för login

// baseURL: /api/movie
console.log(movieController);

router.post('/', movieController.addNewMovie)
router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)
router.put('/:id', movieController.updateMovieById)
router.delete('/:id', movieController.deleteMovieById)
router.get('/:id/reviews', movieController.getAllReviewsForMovieById)



module.exports = router