// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
//const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 app.get('/', (req,res)=>{
    res.send('api is working');
 })

// Connect to MongoDB
mongoose.set('strictQuery', false)
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('MONGO is connected')
    } catch(err){
        console.log("failed to connect with MONGO DB")
    }
}


// Routes
app.use('/api/users', authRoutes); 
//app.use('/api/events', eventRoutes); 
app.use('/api/users', userRoutes);


// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: "Something went wrong!", error: err.message });
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
