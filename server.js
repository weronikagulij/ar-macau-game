const express = require("express");
const app = express();
const path = require("path");

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3333, "0.0.0.0", () => {
  console.log("listening on http://localhost:3333");
});
