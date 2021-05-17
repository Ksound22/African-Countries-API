const Afro = require("../models/country");

// Create country
exports.createNewCountry = function (req, res) {
  Afro.create(
    {
      name: req.body.name,
      capital: req.body.capital,
      region: req.body.region,
      people: req.body.people,
      population: req.body.population,
      currency: req.body.currency,
      president: req.body.president,
    },
    (err, country) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error creating country:", err });
      } else {
        return res.status(200).json({ message: "Country created", country });
      }
    }
  );
};

// Fetch all countries
exports.fetchCountries = function (req, res) {
  Afro.find({}, (err, countries) => {
    if (err) {
      return res.status(500).json({ message: "Error Fetching countries", err });
    } else {
      return res.status(200).json({ countries });
    }
  });
};

// fetch a single country
exports.fetchCountry = function (req, res) {
  Afro.findById(req.params.id, (err, country) => {
    if (err) {
      return res.status(500).json({ message: "Error getting country:", err });
    } else if (!country) {
      return res.status(404).json({ message: "Country not found" });
    } else {
      return res.status(200).json({ country });
    }
  });
};

// Update single country
exports.updateCountry = function (req, res) {
  Afro.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      capital: req.body.capital,
      region: req.body.region,
      people: req.body.people,
      population: req.body.population,
      currency: req.body.currency,
      president: req.body.president,
    },
    (err, country) => {
      if (err) {
        return res.status(500).json({ message: "Error Updating country", err });
      } else if (!country) {
        return res.status(404).json({ message: "Country not found" });
      } else {
        country.save((err, savedCountry) => {
          if (err) {
            return res.status(500).json({ message: "Error: ", err });
          } else {
            return res.status(200).json({ message: "Country updated" });
          }
        });
      }
    }
  );
};

// Delete country
exports.deleteCountry = function (req, res) {
  Afro.findByIdAndDelete(req.params.id, (err, country) => {
    if (err) {
      return res.status(500).json({ message: "Error:", err });
    } else if (!country) {
      return res.status(404).json({ message: "Country not found" });
    } else {
      return res.status(200).json({ message: "Country deleted" });
    }
  });
};
