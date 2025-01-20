const express = require('express');
const { registerUser, loginUser, getServices, getOrders, createOrder, getAvailableQueueNumbers, getUsers, deleteUser, recordPresence, getPresenceData, getMechanics, getUserQueue, updateOrderStatus, getAllOrders } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/services', getServices);
router.get('/orders', getOrders);
router.post('/orders', createOrder);
router.get('/users', getUsers);
router.get('/orders/available-queues', getAvailableQueueNumbers);
router.delete('/users/:id', deleteUser); // New route for deleting a user
router.post('/mechanic-presence', recordPresence);

// Route to get mechanic presence data for a specific date
router.get('/presences', getPresenceData);
router.get('/mechanics', getMechanics); // Rute baru untuk mengambil data mekanik
router.get('/orders/queue/:id', getUserQueue);
router.put('/orders/:orderId/status', updateOrderStatus);




module.exports = router;
