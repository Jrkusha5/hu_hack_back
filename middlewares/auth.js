// const jwt = require('jsonwebtoken');

// // Middleware to verify JWT token
// exports.verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;
    
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     const token = authHeader.split(' ')[1];
    
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;  // Store user info in request for access in controllers
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid or expired token' });
//     }
// };

// // Middleware to check for admin role
// exports.isAdmin = (req, res, next) => {
//     if (req.user.role !== 'admin') {
//         return res.status(403).json({ message: 'Access denied: Admins only' });
//     }
//     next();
// };

// // Middleware to check for registrar role
// exports.isRegistrar = (req, res, next) => {
//     if (req.user.role !== 'registrar' && req.user.role !== 'admin') {
//         return res.status(403).json({ message: 'Access denied: Registrars only' });
//     }
//     next();
// };
