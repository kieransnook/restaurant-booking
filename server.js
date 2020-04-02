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
app.post("/api/tables", function(req, res) {
  console.log(req.body);
  // checks if the requesting user already has a reservation
  for (var i = 0; i < reservations.length; i++) {
    if(reservations[i].id === req.body.id){
      return res.json("ID is already taken!")
    }
  } 
  // checks if the requesting user is already on the waitlist
  for (var i = 0; i < waitlist.length; i++) {
    if(waitlist[i].id === req.body.id){
      return res.json("ID is already taken!")
    }
  } 
  
  // checks if the reservations array is full (5 total) and pushes to proper array
  if (reservations.length >= 5){
    waitlist.push(req.body);
    return res.json(false);
  } else {
    reservations.push(req.body);
    return res.json(true);
  }
  
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});