const mongoose = require("mongoose");

//Order Schema for storing Order information
const OrderSchema = new mongoose.Schema({
  //generate a unique orderId; orderId is the Primary Key for this table
  orderId: { type: String, required: true, unique: true },
  customerEmail: { type: String, required: true }, //links this order to a customer
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Complete"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
