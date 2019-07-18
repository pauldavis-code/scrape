// === EXPRESS
const express = require("express");

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => console.log(`running on port ${PORT}`))

// === HANDLEBARS
const exphbs = require("express-handlebars");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middleware to use static files - parameter is the file
app.use(express.static("public"));

//=== MONGOOSE
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/CommentsDB";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require("./routes/routes")(app)


