const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
    launchDate: {
        type: Date,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    }, 
    target: {
        type: String,
        required: true
    },
    flightNumber: {
        type: Number,
        required: true
    },
    upcoming: {
        type: Boolean,
        required: true
    },
    success: {
        type: Boolean,
        required: true
    },
    customer: {
        type: [String, String],
        required: true
    }
}) 

module.exports = mongoose.model('Mission', missionSchema)