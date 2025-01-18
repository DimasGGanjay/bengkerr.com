const authMiddleware = (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Lanjutkan ke middleware berikutnya atau route handler
};

module.exports = authMiddleware;
