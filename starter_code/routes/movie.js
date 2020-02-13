const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');


router.get('/movie/:movieId', (req, res, next) => {
  console.log(req.params.movieId);
  Movie.findById(req.params.movieId)
    .then(movie => {
      console.log(movie);
      res.render('movie', { movie });
    })
});

module.exports = router;
