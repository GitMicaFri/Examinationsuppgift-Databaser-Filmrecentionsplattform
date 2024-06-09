const Review = require('../Models/reviewModel')

// POST /reviews: Lägg till en ny recension.
const addNewReview = async (payload) => {
    const newReview = new Review(payload)
    await newReview.save()
}

// GET /reviews: Hämta en lista med alla recensioner.
const getAllReviews = async () => {
    const reviews = await Review.find()
    return reviews
}
// GET /reviews/:id: Hämta detaljer för en specifik recension.
const getReviewById = async (reviewId) => {
    const review = await Review.findById(reviewId)
    return review
}

// PUT /reviews/:id: Uppdatera en specifik recension.
const updateReviewById = async (reviewId, payload) => {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, payload, {new: true})
    return updatedReview
}
// DELETE /reviews/:id: Ta bort en specifik recension.
const deleteReviewById = async (reviewId) => {
    await Review.findOneAndDelete(reviewId)
}

module.exports = {
    addNewReview,
    getAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById
}