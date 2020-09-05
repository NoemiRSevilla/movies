const movies = require("../controllers/movies");

module.exports = (app) => {

    app.get('/api/allmovies', (req, res) => movies.getAll(req, res));

    app.post('/api/create/movie', (req, res) => movies.create(req, res));

    app.post('/api/movie/:id/newreview', (req, res) => movies.addReview(req, res));

    app.get('/api/movie/:id', (req, res) => movies.show(req, res));

    app.delete('/destroy/movie/:id', (req, res) => movies.destroy(req, res));

}