const router = require('express').Router();
const moviesController = require('../controllers/moviesControllers');

router 
    .route('/')
    .get(moviesController.findAll)
    .post(moviesController.create);

router
    .route('/:id')
    .get(moviesController.findById)
    .put(moviesController.update)
    .delete(moviesController.remove);


module.exports = router;