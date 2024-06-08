const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')
// baseURL /api/review

router.post('/', async (req, res) => {
    try {
        await reviewController.addNewReview(req.body)
        res.status(200).send('Successfully added new review.')
    
    } catch(err) {
        res.status(400).send(err)
    }
}) 

router.get('/', async (req, res) => {
    try {
        const reviews = await reviewController.getAllReviews()
        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).send(error)
    }
} )

router.get('/:id', async (req, res) => {
    try {
        const review = await reviewController.getReviewById(req.params.id)
        if(!review) {
            return res.status(404).send('Review not found')
        }
        res.status(200).json({message: 'Review retrieved: ', review})
    
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedReview = await reviewController.updateReviewById(req.params.id, req.body)
        if (!updatedReview) {
            return res.status(404).json({message: 'Review not found'})
        }
        res.status(200).json({message: 'Review updated: ', updatedReview})

    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {

        await reviewController.deleteReviewById(req.params.id)
    res.status(200).json({message: `Review deleted`, deleteReview})

    } catch(err) {
        res.status(400).send(err)
    }
})


module.exports = router