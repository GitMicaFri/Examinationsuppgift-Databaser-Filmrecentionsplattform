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

// GET /reviews/:id: Hämta detaljer för en specifik recension.

// PUT /reviews/:id: Uppdatera en specifik recension.

// DELETE /reviews/:id: Ta bort en specifik recension.