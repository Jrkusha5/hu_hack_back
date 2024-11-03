const User = require('../model/User');
const UserController = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find(); // Retrieve all users from the database
            return res.status(200).json(users); // Respond with the users array
        } catch (error) {
            console.error("Error retrieving users:", error);
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    },
};

module.exports = UserController;
