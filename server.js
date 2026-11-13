const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/college');

const Student = mongoose.model('Student', {
    name: String,
    age: Number
});

app.get('/students', async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.post('/students', async (req, res) => {
    const data = await Student.create(req.body);
    res.json(data);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});