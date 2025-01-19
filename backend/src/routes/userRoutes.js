const express = require('express');
const { registerUser, loginUser, getServices, getOrders, createOrder, getAvailableQueueNumbers, getUsers, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/services', getServices);
router.get('/orders', getOrders);
router.post('/orders', createOrder);
router.get('/users', getUsers);
router.get('/orders/available-queues', getAvailableQueueNumbers);
router.delete('/users/:id', deleteUser); // New route for deleting a user

module.exports = router;
