// routes/itineraryRoutes.js
const express = require("express");
const passport = require("passport");
const itineraryController = require("../controllers/itineraryController");

const router = express.Router();

router.use(passport.authenticate("jwt", {session: false}));
router.post("/create", itineraryController.createItinerary);
router.put("/update/:id", itineraryController.updateItinerary);
router.delete("/delete/:id", itineraryController.deleteItinerary);
router.get("/getItineraries", itineraryController.getItineraries);
router.get("/getItineraryDetails/:id", itineraryController.getItineraryDetails);

module.exports = router;
