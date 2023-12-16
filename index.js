const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("server listening on http://localhost:3000");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/rectangle", (req, res) => {
  res.sendFile(__dirname + "/rectangle.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = 3.14*radius * radius;
  console.log(area);
  res.send(`<h1> Circle area is ${area}</h1>`);
});
app.post("/rectangle", (req, res) => {
  const length = req.body.length;
  const width = req.body.width;
  const area=length*width;
  console.log(area);
  res.send(`<h1> Rectangle area is ${area}</h1>`);
});
app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5*base*height;
  console.log(area);
  res.send(`<h1> Triangle area is ${area}</h1>`);
});
