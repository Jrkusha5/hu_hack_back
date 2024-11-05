// controllers/postController.js
const Post = require('../models/Event');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

// Create Post Controller
exports.createEvent = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'posts',
      use_filename: true,
      unique_filename: false,
    });

    // Remove file from server after upload
    fs.unlinkSync(req.file.path);

    // Create new post with Cloudinary image URL
    const newEvent = new Event({
      title,
      description,
      image: result.secure_url,
    });

    await newEvent.save();

    res.status(201).json({ message: 'Post created successfully', post: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

// Get All Posts Controller
exports.getEvents = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};
