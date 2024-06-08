const Review = require('../Models/reviewModel')

// POST /reviews: Lägg till en ny recension.
exports.addNewReview = async (payload) => {
    const newReview = new Review(payload)
    await newReview.save()
}

// GET /reviews: Hämta en lista med alla recensioner.
exports.getAllReviews = async () => {
    const reviews = await Review.find()
    return reviews
}
// GET /reviews/:id: Hämta detaljer för en specifik recension.
exports.getReviewById = async (reviewId) => {
    const review = await Review.findById(reviewId)
    return review
}

// PUT /reviews/:id: Uppdatera en specifik recension.
exports.updateReviewById = async (reviewId, payload) => {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, payload, {new: true})
    return updatedReview
}
// DELETE /reviews/:id: Ta bort en specifik recension.
exports.deleteReviewById = async (reviewId) => {
    await Review.findOneAndDelete(reviewId)
}