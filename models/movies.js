var mongoose = require('mongoose');

//new schema
var MovieSchema = mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String},
    year: {type: Number},
    priority: {type: String}
});

//new model
var Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
