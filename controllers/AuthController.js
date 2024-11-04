const User = require('../model/User'); // Adjust the path as needed
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthController = {
    register: async (req, res) => {
        const { name, email, phone, batch, address, department, password } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !batch || !address || !department || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        try {
            // Check if a user with the same email or phone number already exists
            const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
            if (existingUser) {
                return res.status(400).json({ message: 'User with this email or phone already exists.' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                name,
                email,
                phone,
                batch,
                address,
                department,
                password: hashedPassword,
            });

            // Save the user to the database
            await newUser.save();

            return res.status(201).json({ message: 'User registered successfully.', user: newUser });
        } catch (error) {
            console.error("Registration Error:", error); // Log the error
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        try {
            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: `User with email ${email} not found.` });
            }

            // Compare the password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials.' });
            }

            // Create a token (optional)
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ message: 'Login successful.', token });
        } catch (error) {
            console.error("Login Error:", error); // Log the error
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
};

module.exports = AuthController;
