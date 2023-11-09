// models/itinerary.js
const mongoose = require("mongoose");

const {Schema} = mongoose;
const itinerarySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	dates: {
		type: String,
		required: true
	},
	destinations: [String],
	activities: [String],
	transportationDetails: {
		type: String,
		required: true
	},
	accommodationDetails: {
		type: String,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
