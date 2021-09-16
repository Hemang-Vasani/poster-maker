const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/index.route");
dotenv.config();
//cors enable for all apis
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// Static file Path
app.use(express.static(__dirname + '/public'));



//call index.route.js for all apis | ROUTES
app.use("/", routes);

//ejs
app.set("view engine", "ejs");

//connect to database
connectDB();
function connectDB() {
    mongoose.connect(process.env.db_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection'));
    db.once('open', function callback() {
        console.log("database connected");
    });
}

//connect to node at port
const port = process.argv[2] || process.env.port;
if (!port) {
    throw new Error("port is missing");
}

connectNode();
function connectNode() {
    app.listen(port, (req, res) => console.log("connect at " + port));
}
