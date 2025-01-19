const db = require('../config/database'); // Pastikan koneksi database diimpor
const User = require('../models/userModel');
const bcrypt = require('bcrypt'); // Ensure bcrypt is installed
const jwt = require('jsonwebtoken'); // Ensure jsonwebtoken is installed

const registerUser = (req, res) => {
    const { username, email, phone, password } = req.body;

    // Hash the password before saving
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password', error: err });
        }

        User.create({ username, email, phone, password: hash }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error registering user', error: err });
            }
            res.status(201).json({ message: 'Pendaftaran berhasil,\ntunggu sesaat anda akan di arahkan ke halaman Login', userId: result.insertId });
        });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    User.findByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Error logging in', error: err });
        }
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password with the hashed password in the database
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            // Generate JWT token
            const token = jwt.sign({ userId: user.user_id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
            // Include token, username, and user role in the response
            res.status(200).json({ message: 'Login Berhasil,\ntunggu sesaat anda akan dilihkan ke Dashboard', token, userId: user.user_id, username: user.username, phone: user.phone, role: user.role });
        });
    });
};

const getServices = (req, res) => {
    const sql = 'SELECT service_id, title, price, duration, image FROM services'; // Tambahkan service_id
    console.log('Fetching services data...');

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching services', error: err });
        }

        console.log('Fetched services data:', results);

        // Format results
        const formattedResults = results.map(service => ({
            service_id: service.service_id, // Pastikan service_id ada di sini
            title: service.title || 'Unknown Title',
            price: service.price || 0,
            duration: service.duration || 0,
            image: service.image || null, // Directly use the image path
        }));

        console.log('Formatted results:', formattedResults);
        res.status(200).json(formattedResults); // Return results as JSON
    });
};

const getOrders = (req, res) => {
    const sql = 'SELECT queue_number, plate_number, order_date FROM orders'; // Query to fetch required fields
    console.log('Fetching orders data...');

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching orders', error: err });
        }

        console.log('Fetched orders data:', results);
        res.status(200).json(results); // Return results as JSON
    });
};

const getAvailableQueueNumbers = (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ message: 'Tanggal harus disediakan.' });
    }

    const sql = 'SELECT queue_number FROM orders WHERE DATE(order_date) = ?';
    db.query(sql, [date], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        const takenNumbers = results.map(row => row.queue_number);
        const allNumbers = [1, 2, 3, 4, 5];
        const availableNumbers = allNumbers.filter(num => !takenNumbers.includes(num));

        res.status(200).json({ availableNumbers });
    });
};


const createOrder = (req, res) => {
    const { user_id, service_id, date, time, motor, plate_number, complaint, queue_number } = req.body;

    console.log('Creating order with data:', { user_id, service_id, date, time, motor, plate_number, complaint, queue_number }); // Log data received

    const sql = 'INSERT INTO orders (user_id, service_id, order_date, motor, plate_number, complaint, queue_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [user_id, service_id, new Date(`${date}T${time}`), motor, plate_number, complaint, queue_number];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating order', error: err });
        }
        res.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
    });
};

module.exports = { registerUser, loginUser, getServices, getOrders, createOrder, getAvailableQueueNumbers }; // Ensure all functions are exported
