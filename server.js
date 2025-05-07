const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import Schemas
const Customer = require("./Models/Customer");
const Order = require("./Models/Order");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//connect to database
mongoose.connect(
  "mongodb+srv://connora2:%40llTh3B%40k3dG00ds@jiji.bwf69vb.mongodb.net/?retryWrites=true&w=majority&appName=JiJi"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to mongoDB");
});

/************************
 * API ENDPOINTS
 ************************/

//test API
app.post("/test", (req, res) => {
  console.log("request received");
  res.status(200).send("Server Connected");
});

//to test request path
/*
app.use((req, res, next) => {
    console.log(`Incomding request to: ${req.method} ${req.url}`);
});*/

/************************
 * CUSTOMER ENDPOINTS
 ********************** */

//Create a new customer
//as of 4/26 this is working. DO NOT CHANGE
app.post("/customer", async (req, res) => {
  //data required from Customer schema is name and email
  const { name, email, phone, address } = req.body;
  //confirm request
  console.log(req.body);

  //search if email already exists (customer existing)
  try {
    //this is the check
    let customer = await Customer.findOne({ email });
    //if exists
    if (customer) {
      return res.status(200).json({
        message: "Customer already exists",
        customer,
      });
    }
    //if new
    const newCustomer = new Customer({ name, email, phone, address });
    const savedCustomer = await newCustomer.save();
    res.status(201).json({
      message: "Customer saved successfully",
      customer: savedCustomer,
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while processing this request",
      error: err.message,
    });
  }
});

//Retrieve customer data, confirm customer is in database
//As of 4/26 this is working. DO NOT CHANGE
app.get("/customer", async (req, res) => {
  //comparing name and email because these are required cusomter data
  const { name, email } = req.query;
  console.log("query parameters:", req.query);

  //compare against database
  try {
    //search customer
    const customer = await Customer.findOne({ name, email });

    //customer is found
    if (customer) {
      return res.status(200).json({
        message: `Welcome back, ${customer.name}!`,
        customer,
      });
    } else {
      //customer not found
      return res.status(404).json({
        message: "That email does not match out records. Please try again.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "An error occured retrieving customer data",
      error: err.message,
    });
  }
});

/***********************
 * ORDER ENDPOINTS
 ********************** */
//Generate unique orderIds:
const { v4: uuidv4 } = require("uuid");

//Create a new order
//as of 4/27 this is working. DO NOT CHANGE
app.post("/order", async (req, res) => {
  const { customerEmail, items, total, status } = req.body;
  console.log(req.body);

  try {
    const newOrder = new Order({
      orderId: uuidv4(), //generate new id
      customerEmail, //link order to customer
      items,
      total,
      status,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: `Order created successfully. Your order number is: ${savedOrder.orderId} `,
      order: savedOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while creating the order",
      error: err.message,
    });
  }
});

//Get 1 order by it's orderId
//as of 4/27 this is working. DO NOT CHANGE
app.get("/order", async (req, res) => {
  //retrieve order data using order number
  const { orderId } = req.query;
  console.log(req.query);
  console.log("received orderId", orderId);

  //compare against database
  try {
    //search orders
    const order = await Order.findOne({ orderId });

    //order exists
    if (order) {
      return res.status(200).json({
        message: "Order found",
        order,
      });
    } else {
      //order not found
      return res.status(404).json({
        message: "Order Not Found. Please try again",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "An error occurred while retrieving the order.",
      error: err.message,
    });
  }
});

//Get all of the orders that belong to a customer
app.get("/orders", async (req, res) => {
  //retrieve orders linked to customerEmail
  const { customerEmail } = req.query;
  console.log(req.query);

  //validate customer email
  if (!customerEmail) {
    return res.status(400).json({
      message: "Customer email required to retrieve orders.",
    });
  }

  try {
    const orders = await Order.find({ customerEmail });

    if (orders.length > 0) {
      return res.status(200).json({
        message: "You have these orders: ",
        orders,
      });
    } else {
      return res.status(404).json({
        message: "This customer has no orders: ",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "We encounted an issue. Please try again.",
    });
  }
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:${port}");
});
