const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require("path");
const multer = require('multer');
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
const Events = require('./models/events');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });


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

app.get('/events/add', (req, res) => {
    res.render('events/addevent.ejs');
});

app.post('/events/add', upload.none(), async (req, res) => {
    const event = new Events(req.body);
    await event.save();
    res.redirect('/');
})


app.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.render("events/details.ejs", { event });
})

app.post("/details/:id", async (req, res) => {
    const { id } = req.params;
    await Events.findByIdAndDelete(id);
    res.redirect('/');
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