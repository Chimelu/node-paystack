// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const ngrok = require("@ngrok/ngrok");


const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());



app.use("/users",require('./routes/userRoutes'))
app.use("/plans",require('./routes/planRoutes'))

// Connect to the database
const start = async () => {
  try {
    // Connect to MongoDB
    await connectDB(process.env.MONGODB_URI);

    
    app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
     
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
start();

// Ngrok setup for development
if (process.env.NODE_ENV === "development") {
  (async () => {
    try {
      // Connect Ngrok with authtoken from environment variable
      const url = await ngrok.connect({
        addr: PORT,
        authtoken_from_env: true,
        authtoken: process.env.NGROK_AUTHTOKEN,
      });
      
      console.log(`Ingress established at: ${url.url()}`);
    } catch (error) {
      console.error("Error establishing Ngrok tunnel:", error);
    }
  })();
}
