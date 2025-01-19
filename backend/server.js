const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const authMiddleware = require('./src/middlewares/auth'); // Import middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware dasar
app.use(cors());
app.use(bodyParser.json());

// Middleware untuk semua route
app.use(authMiddleware);

// Route
app.use('/api', userRoutes);
app.use('/api/orders', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);
});
