const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

//routes
const authRoutes=require('./routes/auth');
const eventRoutes=require("./routes/event");

const cors = require('cors');
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',eventRoutes);

app.get('/', (req, res, next) => {
    console.log('Helo');
    res.status(200).json({
        message: "Hello from the server"
    })
})

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("Connected to MongoDB");
    });
