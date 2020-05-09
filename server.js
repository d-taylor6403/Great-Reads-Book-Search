//Dependencies
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./controllers/booksController");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

//Define API routes here
app.use(routes);

//Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) throw err;

  })
  .then(() => console.log("Database Connected!"))
  .catch(err => console.log(err));



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
