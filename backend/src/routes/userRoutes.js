const express = require('express');
const { registerUser, loginUser, getServices, getOrders, createOrder, getAvailableQueueNumbers } = require('../controllers/userController');



const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/services', getServices); // Add this line for services
router.get('/orders', getOrders); // New endpoint for orders

router.get('/available-queues', getAvailableQueueNumbers);
router.post('/orders', createOrder); // New endpoint for creating orders


module.exports = router;
