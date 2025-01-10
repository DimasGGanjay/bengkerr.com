const User = require('../models/userModel');
const bcrypt = require('bcrypt'); // Ensure bcrypt is installed

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
            res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
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
            // Include user role in the response
            res.status(200).json({ message: 'Login successful', userId: user.user_id, role: user.role });
        });
    });
};

module.exports = { registerUser, loginUser }; // Ensure both functions are exported
