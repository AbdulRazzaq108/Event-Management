const mongoose = require('mongoose');
const initData = require("./data.js");
const Events = require("../models/events.js");

mongoose.connect('mongodb://127.0.0.1:27017/Project1')
    .then(() => {
        console.log('Connected to Database!');
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Events.deleteMany({});
    await Events.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();