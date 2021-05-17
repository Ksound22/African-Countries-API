const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = `${process.env.MONGO_URI}`;

// Connect mongoose
module.exports = function () {
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log("Error connecting to DB:", err);
      } else {
        console.log("Database Connected");
      }
    }
  );
};
