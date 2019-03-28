const Movie = require('../models/moviesModels');

// Defining all methods and business logic for routes

module.exports = {
    findAll: function(req, res) {
        Movie.find(req.query)
            .then(movies => res.json(movies))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        Movie.findById(req.params.id)
            .then(movie => res.json(movie))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        Movie.create(req.body)
            .then(newMovie => res.json(newMovie))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        Movie.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        Movie.findById({_id: req.params.id})
            .then(movie => movie.remove())
            .then(allmovies => res.json(allmovies))
            .catch(err => res.status(422).json(err));
    }
};