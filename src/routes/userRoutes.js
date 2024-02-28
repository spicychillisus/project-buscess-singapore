const controller = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// user related routes
router.post('/', controller.createUser);

module.exports = router;