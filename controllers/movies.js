const express = require("express");
const movie = express.Router();
const Users = require("../models/Users");

movie.put("/:userId/:movieId", (req, res) => {
  Users.findByIdAndUpdate(
    { _id: req.params.userId },
    {
      $push: {
        favorites: req.params.movieId
      }
    },
    (err, updatedUser) => {
      if (err) console.log(err.message);
      console.log(`Movie has been added.`);
      res.json(updatedUser);
    }
  );
})

movie.delete("/:user/:deleteMovieId", (req, res) => {
  Users.findByIdAndUpdate(
    { _id: req.params.userID },
    {
      $pull: {
        favorites: req.params.deleteMovieId
      }
    },
    (err, updatedUser) => {
      if (err) console.log(err.message);
      console.log(`Movie has been deleted.`);
      res.json(updatedUser);
    }
  );
});

module.exports = movie;