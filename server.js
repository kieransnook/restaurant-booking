const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// variables defining the reservations

var reservations = [
  { routeName: "john",
    customerName: "John",
    phoneNumber: "770-123-4567",
    email: "john@gmail.com",
    id: 2
  },
];
var waitlist = [
  { routeName: "john",
    customerName: "John",
    phoneNumber: "770-123-4567",
    email: "john@gmail.com",
    id: 1
  },
];

// Route to serve index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Route to serve reservations.html 
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
// Route to serve tables.html
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Route to serve JSON of the list of reservations
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});
// Route to serve JSON of the list of wait-listed reservations
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});
// Route to add new reservation


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});