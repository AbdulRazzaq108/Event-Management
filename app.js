const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require("path");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
const Events = require('./models/events');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://127.0.0.1:27017/Project1')
    .then(() => {
        console.log('Connected to Database!');
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", async (req, res) => {
    const allEvents = await Events.find({});
    res.render("events/events.ejs", { allEvents });
})

app.get('/addevent', (req, res) => {
    res.render('events/addevent.ejs');
});


app.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.render("events/details.ejs", { event });
})

app.get("/users/login", (req, res) => {
    res.render("users/login.ejs");
})

app.get("/users/signup", (req, res) => {
    res.render("users/signup.ejs");
})

app.post("/signup", (req, res) => {
    let { username, password, email } = req.body;
})

app.post("/login", (req, res) => {
    // console.log(req.session);
    let { username, password } = req.body;
    console.log(username, password);
    res.send("Login Successful");
})

app.listen(3000, () => {
    console.log("App is listening to port 3000")
})