const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')
// baseURL /api/review

router.post('/', reviewController.addNewReview) 
router.get('/:id', reviewController.getReviewById)
router.delete('/:id', reviewController.deleteReviewById)
router.put('/:id', reviewController.updateReviewById)


module.exports = router