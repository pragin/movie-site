var mongoose = require('mongoose');

//Movie schema
var movieSchema = mongoose.Schema({
  cast: {
    type:[String],
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  imdbld: {
    type: String
  },
  language: {
    type: String
  },
  mpaaRating: {
    type: String
  },
  plot:{
    type: String
  },
  plot: {
    type: String
  },
  runtime: {
    type: Number
  },
  title:{
    type: String,
    required: true
  },
  viewRating: {
    type: Number
  },
  viewerVotes: {
    type: Number
  },
  year: {
    type: Number
  }
});

//Create the Movie model
var Movie = module.exports = mongoose.model('Movie', movieSchema);

//Get movies
module.exports.getMovies = function (callback, limit){
  Movie.find(callback).limit(limit);
}
