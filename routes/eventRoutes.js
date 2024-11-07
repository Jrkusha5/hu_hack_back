
const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const eventController = require('../controllers/EventController');

// Route for creating a new post
router.post('/create', upload.single('image'), eventController.createEvent);

// Route for getting all posts
router.get('/posts', eventController.getEvents);

module.exports = router;
