const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      console.log(allTheMovies);
      res.render('movies', { allTheMovies });
    });
});

module.exports = router;
