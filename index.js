const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const coursesData = require("./Data/course.json");

app.get("/", (req, res) => {
  res.send(" server is running");
});

app.get("/allCourses", (req, res) => {
  res.send(coursesData);
});



app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
