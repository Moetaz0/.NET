const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  designation: { type: String, required: true, unique: true },
  prix: { type: Number, required: false },
  place: { type: String, required: true },
  etat: { type: String, required: false },
  imageart: { type: [String], required: false },
});

module.exports = mongoose.model("Hotel", HotelSchema);
