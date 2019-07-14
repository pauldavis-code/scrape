// === EXPRESS
const express = require("express");

const PORT = process.env.PORT || 3000
const app = express();

require("./routes/htmlRoutes")(app)

app.listen(PORT, () => console.log(`running on port ${PORT}`))

// === HANDLEBARS
var exphbs = require("express-handlebars");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middleware to use static files - parameter is the file
app.use(express.static("public"));