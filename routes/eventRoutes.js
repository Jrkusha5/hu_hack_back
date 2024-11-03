// const express = require('express');
// const multer = require('multer'); // To handle file uploads
// const eventController = require('../controllers/EventController'); // Adjust the path as needed

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Set the destination directory for uploaded files
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Append the current timestamp to the file name
//     }
// });
// const upload = multer({ storage });

// // Define the route to create an event
// router.post('/', upload.single('image'), eventController.createEvent); // Ensure the path here is '/'
// module.exports = router;
