//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Brand variables
const brand = {
  name: "Mr Dudeman",
  phoneNumber: "01706-555-222",
  email: "person@place.com",
  address: {
    line1: "12 Example Street",
    line2: "Exampleton",
    line3: "WO0 0MG"
  },
  googleMapURL: "https://www.google.com/maps/d/embed?mid=1hHWY2wh39rCkFhLO0R9YIS3-9hA"
}

const heroCarousel = [
  bathroom = {img: "bathroom", alt: "Plumber working in a bathroom", header: "Planning a Bathroom Refurbishment?", active: "active"},
  boiler = {img: "boiler", alt: "Plumber working on a boiler", header: "Need a New Boiler?"},
  underfloorHeating = {img: "underfloor-heating", alt: "Underfloor heating", header: "Fitting Underfloor Heating?"}
]

const services = [
  card1 = {img: "danger", header: "Emergency Repairs", list: ["Boiler", "Burst Pipes", "Toilet"], id:"1"},
  card2 = {img: "mag-glass", header: "Services", list: ["Powerflushing", "Energy Efficiency Advice", "Landlord Safety Certificates"], id:"2"},
  card3 = {img: "design", header: "Projects", list: ["Bathroom Refurbishments", "Central Heating Installations", "Underfloor Heating"], id:"3"}
]

const affiliations = [
  affl1 = {img: "baxi", name: "Baxi"},
  affl2 = {img: "gas-safety-register", name: "Gas Safety Register"},
  affl3 = {img: "nest", name: "Nest"},
  affl4 = {img: "oftec", name: "Oftec"},
  affl5 = {img: "worcester-bosch", name: "Worcester/Bosch"}
]

// Routing
app.get("/", function (req, res) {
  res.render("index", {
    brand: brand, heroCarousel: heroCarousel, services: services, affiliations: affiliations
  })
});

app.post("/contact", function (req, res) {
  res.send("Thank you " + req.body.name + " for getting touch. We will respond to " + req.body.email + " as soon as possible.<p> The user will have automatically sent an email to you now.")
})

app.get("/faqs", function (req, res) {
  res.render("faqs", {
    brand: brand
  })
})

app.get("/terms-and-conditions", function (req, res) {
  res.render("terms-and-conditions", {
    brand: brand
  })
})

app.get("/privacy-policy", function (req, res) {
  res.render("privacy-policy", {
    brand: brand
  })
})

app.listen(3000, function (req, res) {
  console.log("Listening to port 3000");
});