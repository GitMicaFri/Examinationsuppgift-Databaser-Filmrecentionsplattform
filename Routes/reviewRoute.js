const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')
// baseURL /api/review

router.post('/', reviewController.addNewReview) 


module.exports = router