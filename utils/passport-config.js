// passport-config.js
const passport = require("passport");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const User = require("../models/user");

dotenv.config();

passport.use(
	new LocalStrategy({ usernameField: 'name' }, async (name, password, done) => {
		try {
			const user = await User.findOne({ name });

			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}

			const passwordMatch = await bcrypt.compare(password, user.password);

			if (!passwordMatch) {
				return done(null, false, { message: 'Incorrect password.' });
			}

			return done(null, user);
		} catch (error) {
			console.error(error);
			return done(error);
		}
	})
);

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_TOKEN
		},
		async (jwtpayload, done) => {
			try {
				const user = await User.findById(jwtpayload.id);

				if (user) {
					return done(null, user);
				}
				return done(null, false);
			} catch (error) {
				console.error(error);
				return done(error, false);
			}
		}
	)
);

module.exports = passport;
