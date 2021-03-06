const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing
app.use(routes);

// mongoose connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// allows us to use .findOneAndUpdate in controllers
mongoose.set('useFindAndModify', false);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
