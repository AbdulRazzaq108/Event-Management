const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: Date.now()
    },
    time: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const Events = mongoose.model("Event", eventSchema);
module.exports = Events;