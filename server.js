var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");


app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });