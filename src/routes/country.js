const express = require("express");
const router = express.Router();
const countryCtrl = require("../controllers/countryControllers");

// Post route to create countries
router.post("/africanCountry", countryCtrl.createNewCountry);

// Fetch all countries
router.get("/africanCountries", countryCtrl.fetchCountries);

// Get single country
router.get("/africanCountry/:id", countryCtrl.fetchCountry);

// Update single country
router.put("/africanCountry/:id", countryCtrl.updateCountry);

// Delete countries
router.delete("/africanCountry/:id", countryCtrl.deleteCountry);

module.exports = router;
