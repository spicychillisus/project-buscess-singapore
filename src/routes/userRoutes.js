const controller = require('../controllers/userController');
const express = require('express');
const router = express.Router();

// user related routes
router.post('/', controller.createUser);
router.get('/:user_id', controller.getUser);
router.put('/:user_id', controller.editUsername);

module.exports = router;