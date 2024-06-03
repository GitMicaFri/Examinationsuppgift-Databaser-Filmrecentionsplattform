const express = require('express')
const router = express.Router()
const movieController = require('../Controllers/movieController')

// baseURL: /api/movie

router.post('/', movieController.addNewMovie)

module.exports = router