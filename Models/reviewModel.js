const mongoose = require('mongoose')

// Review-schemat ska innehålla:: movieId (referens till Movie), userId (referens till User), rating, comment, createdAt.

const reviewSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true}) // aktiverar både created at och updated at

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
// module.exports = mongoose.model('Review', reviewSchema); // mer kompakt sätt att göra de två raderna ovan