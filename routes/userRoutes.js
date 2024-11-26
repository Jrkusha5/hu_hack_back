const express = require('express');
const { getAllUsers ,getUserCount} = require('../controllers/UserController');


const router = express.Router();

 
router.get('/getAllUsers', getAllUsers);
// Use the getAllUsers method
router.get('/users/count', getUserCount);

module.exports = router;
