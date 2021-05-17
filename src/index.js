const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 9000;

const dbSetup = require("./database/setup");
const countryRoutes = require("./routes/country");

// Middleware
app.use(express.json());

dbSetup();
app.use(countryRoutes);

// Routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
