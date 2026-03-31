const mongoose = require("mongoose");

const bouquetSchema = new mongoose.Schema({
  flowers: Object,
  leaf: String,
  note: String,
}, { timestamps: true });

module.exports = mongoose.model("Bouquet", bouquetSchema);