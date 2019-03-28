const router = require('express').Router();
const movieRoutes = require('./moviesRoutes');
const path = require('path');


// API routes

router.use('/api/books', bookRoutes);

// if no Api routes are hit, send the React app

// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;