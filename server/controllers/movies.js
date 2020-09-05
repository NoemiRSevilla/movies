require("../models/movie");


const mongoose = require("mongoose"),
    Movie = mongoose.model("Movie"),
    Review = mongoose.model("Review")

module.exports = {
    getAll: (req, res) => {
        Movie.find()
            .then(movies => {
                res.json({
                    results: movies
                });
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            })
    },

    create: (req, res) => {
        Movie.create(req.body)
            .then(movie => {
                res.json({
                    results: movie
                });
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            })
    },

    addReview: (req, res) => {
        console.log(req.body)
        console.log(req.params.id)
        Review.create(req.body)
            .then(review => {
                Movie.findOneAndUpdate({_id: req.params.id},
                {$push: {Reviews: review}})
                    .then(review => {
                        res.json({
                            results: review
                        })
                    })
                    .catch(err => {
                        res.json({
                            errors: err.errors
                        });
                    })
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            });
    },

    show: (req, res) => {
        Movie.findOne({
                _id: req.params.id
            })
            .then(movie => {
                res.json({
                    results: movie
                });
            })
    },
    
    destroy: (req, res) => {
        Movie.remove({
                _id: req.params.id
            })
            .then(movie => {
                res.json({
                    results: movie
                });
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            })
    }
}