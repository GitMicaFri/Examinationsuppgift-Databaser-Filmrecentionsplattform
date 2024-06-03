const mongoose = require('mongoose')

// Movie-schemat ska innehålla: title, director, releaseYear, genre.

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    director: {
        type: String,
        required: true,
        index: true
    },
    releaseYear: {
        type: Number,
        required: true,
        validate: { 
            validator: function(v) { // för att kolla om året är realistikst
                return v >= 1800 && v <= new Date().getFullYear();
            },message: props => `{props.value} is not a valid release year!`        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
    genre: [{ // lista av strängar, tillåter flera genre
        type: String,
        required: true
    }]
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

// module.exports = mongoose.model('Movie', movieSchema);