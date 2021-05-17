const mongoose = require("mongoose");

const afroSchema = new mongoose.Schema({
  name: String,
  capital: String,
  region: String,
  people: String,
  population: String,
  currency: String,
  president: String,
});

const Afro = mongoose.model("Afro", afroSchema);

module.exports = Afro;
