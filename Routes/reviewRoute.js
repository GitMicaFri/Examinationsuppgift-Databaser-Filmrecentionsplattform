const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')
// baseURL /api/review

router.post('/', reviewController.addReview) 


module.exports = router