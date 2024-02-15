const controller = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/', controller.generateUserCode, controller.createNormalUser);