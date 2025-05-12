const mongoose = require("mongoose");

//Customer Schema for storing customer information
const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  address: String,
});

module.exports = mongoose.model("Customer", CustomerSchema);
