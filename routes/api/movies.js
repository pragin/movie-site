const express = require('express');
const router = express.Router();

//Movie model
const Movie = require('../../models/Movie');



// @route GET api/movies
// @desc Get All Items
// @access Public

router.get('/', (req, res) => {
    Movie.find().limit(2)
        .then(movies =>res.json(movies))
        .catch(err => res.status(404).json({success: false}));
});

// @route POST api/movies
// @desc Create A Movie
// @access Public

router.post('/', (req, res) => {
    const newMovie = new Movie({
        
    });

    newMovie.save()
        .then(movie => res.json(movie))
});


//@route DELETE api/movies
//@desc Delete a moive
//access public

router.delete('/:id',(req, res) => {
    Movie.findById(req.params.id)
        .then(movie => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});
    
module.exports = router;

