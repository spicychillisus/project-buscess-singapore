const express = require('express');
const bodyParser = require('body-parser');

const router = express();
const userRoutes = require('./userRoutes');
const forumRoutes = require('./forumRoutes');
const postRoutes = require('./postRoutes');
const pointsRoutes = require('./pointsRoutes');
const rankRoutes = require('./rankRoutes');
const trainRoutes = require('./trainRoutes');
const updateRoutes = require('./updatesRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const websiteRoutes = require('./websiteRoutes');

router.use('/users', userRoutes);
router.use('/forum', forumRoutes);
router.use('/post', postRoutes);
router.use('/points', pointsRoutes);
router.use('/rank', rankRoutes);
router.use('/train', trainRoutes);
router.use('/update', updateRoutes);
router.use('/vehicle', vehicleRoutes);
router.use('/website', websiteRoutes);

const userController = require('../controllers/userController');
// login and register routes
router.post('/login')
router.post('/register')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/forgetPassword', userController.forgetPassword)