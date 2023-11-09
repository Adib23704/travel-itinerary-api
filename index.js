// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const passport = require('./utils/passport-config');
const userRoutes = require('./routes/userRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB);

app.use(passport.initialize());
app.use(express.json({ limit: '10mb' }));

app.use('/user', userRoutes);
app.use('/itinerary', passport.authenticate('jwt', { session: false }), itineraryRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
