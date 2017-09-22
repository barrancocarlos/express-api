var express  = require('express');
var app      = express();

// import model
var Movie = require('../models/movies');

//api function export
module.exports = function(app) {

//get all movies
app.get('/api', function(req, res, next) {
   var movies = Movie.find().exec(function(err, data) {
        if(err) {
            return next(err);
        }
         console.log(data);
         res.json(data);
    });
});

//get single movie
    app.get('/api/:id', function(req, res, next) {
       var movies = Movie.findById(req.params.id, function(err, data) {
            if(err) {
                return next(err);
            }
            console.log(data);
            res.json(data);
        });
    });

//post new movie
    app.post('/api', function(req, res, next) {
        var movie = new Movie({
           title: req.body.title,
           year: req.body.year,
           genre: req.body.genre,
           priority: req.body.priority
        });
        movie.save(function(err, data) {
            if(err) {
                return next(err);
            }
            console.log(data);
            res.json(data);

         });

    });


//Delete movie
    app.delete('/api/:id', function(req, res) {
       Movie.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });

    });

//Update movie
    app.put('/api/:id', function(req, res, next) {
        console.log("edit id");
        Movie.findById(req.params.id, function(err, data) {
            data.title = req.body.title;
            data.year = req.body.year;
            data.genre = req.body.genre;
            data.priority = req.body.priority;

            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.json(data);
            });
        });
    });
};
