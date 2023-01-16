const express = require("express");
const path = require("path");

let app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});