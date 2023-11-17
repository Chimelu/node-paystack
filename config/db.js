const mongoose = require("mongoose");
mongoose.set("strictQuery", false);



const connectDB = async (url) => {

    const conn = await mongoose.connect(url, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    // console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1);
//   }
};

module.exports = connectDB; 