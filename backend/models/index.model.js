const mongoose = require("mongoose");
const moment = require("moment");

let Schema = mongoose.Schema;


// DEFINING USER SCHEMA
let userSchema = new Schema({
    division: {
        type: String
    },
    zsm: {
        type: String
    },
    rm: {
        type: String
    },
    tm: {
        type:String
    },
    hq: {
        type: String
    },
    doctor_name: {
        type: String,
    },
    user_image: {
        type: String,
    },
    current_date: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
});

// DEFINING EVENT/FRAME SCHEMA
let eventSchema = new Schema({
    fonttype: {
        type: String,
        default: '',
    },
    fontsize: {
        type: String,
        default: '',
    },
    fontcolor: {
        type: String,
        default: '',
    },
    othercss: {
        type: String,
        default: '',
    },
    addfonttype: {
        type: String,
        default: '',
    },
    addfontsize: {
        type: String,
        default: '',
    },
    addfontcolor: {
        type: String,
        default: '',
    },
    addothercss: {
        type: String,
        default: '',
    },
    ev_image: {
        type: String,
    },
}, {
    versionKey: false
})

// CREATION OF USER & EVENT(FRAME) MODEL
let eventModel = mongoose.model("event", eventSchema);
let userModel = mongoose.model("user", userSchema);

// EXPORT BOTH MODELS
module.exports = {
    eventModel,
    userModel
}