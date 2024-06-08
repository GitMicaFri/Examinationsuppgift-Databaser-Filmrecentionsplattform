const Review = require('../Models/reviewModel')

// POST /reviews: Lägg till en ny recension.
exports.addNewReview = async (req, res) => {
    try {
        const newReview = new Review(req.body)
        await newReview.save()
        res.status(200).send('Successfully added new review.')
    
    } catch(err) {
        res.status(400).send(err)
    }
}

// GET /reviews: Hämta en lista med alla recensioner.
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews)
    
    } catch (error) {
        res.status(400).send(error)
    }
}

// GET /reviews/:id: Hämta detaljer för en specifik recension.
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)

        if(!review) {
            return res.status(404).send('Review not found')
        }
        res.status(200).json({message: 'Review retrieved: ', review})
    
    } catch (error) {
        res.status(400).send(error)
    }
}

// PUT /reviews/:id: Uppdatera en specifik recension.
exports.updateReviewById = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!review) {
            return res.status(404).json({message: 'Review not found'})
        }
        res.status(200).json({message: 'Review updated: ', review})

    } catch (error) {
        res.status(400).send(error)
    }
}
// DELETE /reviews/:id: Ta bort en specifik recension.
exports.deleteReviewById = async (req, res) => {
    try {
    const deleteReview = await Review.findOneAndDelete({ _id:req.params.id})
    res.status(200).json({message: `Review deleted`, deleteReview})

    } catch(err) {
        res.status(400).send(err)
    }
}