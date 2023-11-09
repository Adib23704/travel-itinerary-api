// controllers/itineraryController.js
const Itinerary = require("../models/itinerary");

exports.createItinerary = async (req, res) => {
	try {
		const {
			name,
			dates,
			destinations,
			activities,
			transportationDetails,
			accommodationDetails
		} = req.body;
		const user = req.user._id;

		const itinerary = await Itinerary.create({
			name,
			dates,
			destinations,
			activities,
			transportationDetails,
			accommodationDetails,
			user
		});

		res.status(201).json({itinerary});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
	return true;
};

exports.updateItinerary = async (req, res) => {
	try {
		const {
			name,
			dates,
			destinations,
			activities,
			transportationDetails,
			accommodationDetails
		} = req.body;
		const itineraryId = req.params.id;

		const updatedItinerary = await Itinerary.findByIdAndUpdate(
			itineraryId,
			{
				name,
				dates,
				destinations,
				activities,
				transportationDetails,
				accommodationDetails
			},
			{new: true}
		);

		if (!updatedItinerary) {
			return res.status(404).json({error: "Itinerary not found"});
		}

		res.json({itinerary: updatedItinerary});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
	return true;
};

exports.deleteItinerary = async (req, res) => {
	try {
		const itineraryId = req.params.id;

		const deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);

		if (!deletedItinerary) {
			return res.status(404).json({error: "Itinerary not found"});
		}

		res.json({message: "Itinerary deleted successfully"});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
	return true;
};

exports.getItineraries = async (req, res) => {
	try {
		const user = req.user._id;

		const itineraries = await Itinerary.find({user});

		res.json({itineraries});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
	return true;
};

exports.getItineraryDetails = async (req, res) => {
	try {
		const itineraryId = req.params.id;

		const itinerary = await Itinerary.findById(itineraryId);

		if (!itinerary) {
			return res.status(404).json({error: "Itinerary not found"});
		}

		res.json({itinerary});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
	return true;
};
