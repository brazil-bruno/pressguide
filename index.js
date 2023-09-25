const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//View Engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//PostgreSQL database
connection
  .authenticate()
  .then(() => {
    console.log("Database connection done!.");
  })
  .catch((msgError) => {
    console.log(msgError);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Server is running!.");
});
