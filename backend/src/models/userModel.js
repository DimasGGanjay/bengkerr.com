const db = require('../config/database');

const User = {
    create: (userData, callback) => {
        const { username, email, phone, password } = userData;
        const sql = 'INSERT INTO Users (username, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [username, email, phone, password], callback);
    },
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM Users WHERE email = ?';
        db.query(sql, [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]); // Return the first user found
        });
    },
    delete: (userId, callback) => {
        const sql = 'DELETE FROM Users WHERE user_id = ?';
        db.query(sql, [userId], callback);
    },
};

module.exports = User;
