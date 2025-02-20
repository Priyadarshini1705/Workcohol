const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/sidhbali_hospital', { useNewUrlParser: true, useUnifiedTopology: true });

// Service model
const serviceSchema = new mongoose.Schema({
    name: String,
});
const Service = mongoose.model('Service', serviceSchema);

// API endpoint to get services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).send('Error fetching services');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
