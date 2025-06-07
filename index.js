require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const preferencesRoutes = require("./routes/preferencesRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', preferencesRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



