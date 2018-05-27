var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController.js');

//api function export
module.exports = function(app) {
/*
 * GET
 */
app.get('/api', bookController.list);

/*
 * GET
 */
app.get('/api/:id', bookController.show);

/*
 * POST
 */
app.post('/api', bookController.create);

/*
 * PUT
 */
app.put('/api/:id', bookController.update);

/*
 * DELETE
 */
app.delete('/api/:id', bookController.remove);
};

