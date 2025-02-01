const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
    mongoose.connect('mongodb://mongo:27017/mydb')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
