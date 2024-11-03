const express = require('express');
const { register, login } = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes (require valid token and specific roles)
// router.get('/users', verifyToken, isAdmin, getAllUsers); // Admin-only route to view all users
// router.put('/assign-registrar/:userId', verifyToken, isAdmin, assignRegistrar); // Admin-only to assign registrar role

module.exports = router;
