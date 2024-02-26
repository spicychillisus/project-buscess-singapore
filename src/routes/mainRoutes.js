const express = require('express');
const bodyParser = require('body-parser');

const router = express();
const userRoutes = require('./userRoutes');

// routes used
router.use('/users', userRoutes);

// login and register routes
router.post('/login')
router.post('/register')


/* const userController = require('../controllers/userController');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/forgetPassword', userController.forgetPassword) */

module.exports = router;