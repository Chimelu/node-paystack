// imports
const express = require("express");
const app = express()
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require('./config/db')


// specify the port from our enviroment variable
const PORT = process.env.PORT || 8080; 
app.use(cors());
app.use(express.json());
// connect database

// routes

app.get('/', async (req, res) => {
    res.send("Hello World!");
});
app.use("/users", require('./routes/userRoutes'));


const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URI);
      app.listen(PORT, () => {
        console.log(
            `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
        );
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    });
      
    } catch (error) {
      console.log(error);
    }
  };
  
 start();
 