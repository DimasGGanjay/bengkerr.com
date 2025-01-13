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
    const sql = 'SELECT title, price, image FROM services'; // Correct query
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching services', error: err });
        }

        // Format results
        const formattedResults = results.map(service => ({
            title: service.title || 'Unknown Title',
            price: service.price || 0,
            image: service.image || null, // Default null jika gambar kosong
        }));

        res.status(200).json(formattedResults); // Return results as JSON
    });
};

module.exports = { registerUser, loginUser, getServices }; // Ensure all functions are exported
