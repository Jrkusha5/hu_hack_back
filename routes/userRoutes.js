const express = require('express');
const { getAllUsers } = require('../controllers/UserController');


const router = express.Router();

 
router.get('/getAllUsers', getAllUsers);
// Use the getAllUsers method

module.exports = router;
