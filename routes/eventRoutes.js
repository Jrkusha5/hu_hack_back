
const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const eventController = require('../controllers/EcentController');

// Route for creating a new post
router.post('/create', upload.single('image'), eventController.createPost);

// Route for getting all posts
router.get('/events', eventController.getPosts);

module.exports = router;
