const express = require('express');
const { registerUser, loginUser, getServices } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/services', getServices); // Add this line for services

module.exports = router;