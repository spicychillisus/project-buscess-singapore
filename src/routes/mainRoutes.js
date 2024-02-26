const express = require('express');
const bodyParser = require('body-parser');

const router = express();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);

const userController = require('../controllers/userController');
// login and register routes
router.post('/login')
router.post('/register')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/forgetPassword', userController.forgetPassword)