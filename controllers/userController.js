// controllers/userController.js
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");

dotenv.config();

exports.registerUser = async (req, res) => {
	try {
		const { name, password } = req.body;

		if (!name || !password) {
			return res.status(400).json({ error: 'Name and password are required' });
		}

		const existingUser = await User.findOne({ name });
		if (existingUser) {
			return res.status(400).json({ error: 'User already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({ name, password: hashedPassword });
		await newUser.save();

		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
	return true;
};

exports.loginUser = async (req, res) => {
	passport.authenticate('local', { session: false }, (err, user) => {
		if (err || !user) {
			return res.status(401).json({ error: 'Authentication failed' });
		}

		req.login(user, { session: false }, (error) => {
			if (error) {
				res.status(500).json({ error: 'Internal Server Error' });
			}

			const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_TOKEN, {
				expiresIn: '1h',
			});

			return res.json({ token });
		});
		return true;
	})(req, res);
};
