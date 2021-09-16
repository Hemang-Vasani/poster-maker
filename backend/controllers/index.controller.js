const { userModel } = require("../models/index.model");
const { eventModel } = require("../models/index.model");
const tojson = require("./tojson");
const csv = require("csvtojson");
require('dotenv').config();

// AWS FOR DELETEING USER IMAGE
const aws = require("aws-sdk");
var s3;
var s3 = new aws.S3({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_ID,
    Bucket: process.env.AWS_BUCKET_NAME
    // region: "us-east-2",
});

// DASHBOARD 
const index = (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'index'
        });
    }
}

// HANDLING OF ADD USER DATA
const adduserdata = async (req, res) => {
    try {
        console.log("in adduserdata");
        let newuser = new userModel(req.body);
        if (req.file !== undefined) {
            newuser.user_image = req.file.key;
        } else {
            console.log("req file: " + JSON.stringify(req.file));
            newuser.user_image = 'default.png';
        }
        let docs = await newuser.save();
        if (docs) res.send('user added successfully.');
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'adduserdata'
        });
    }
}

// HANDLING OF ADD/UPDATE FRAME/EVENT
const addframe = async (req, res) => {
    try {
        var updateId = req.body.updateId;
        console.log("updateid: - " + updateId);
        // FOR ADD/CREATE
        if (!updateId) {
            let newframe = new eventModel(req.body);
            if (!req.file) {
                let docs = await eventModel.save();
                if (docs) res.redirect("/frame");
            } else {
                newframe.ev_image = req.file.filename
                let docs = await newframe.save();
                if (docs) res.redirect("/frame");
            }
        }
        // FOR UPDATE
        else {
            var id = req.body.updateId;
            if (!id.match(/^[0-9a-fA-F]{24}$/)) {
                throw new Error("NOT VALID ID.");
            }
            var query = { _id: id };
            var newData = req.body;
            if (req.file !== undefined) {
                newData.ev_image = req.file.filename;
            }
            let docs = await eventModel.findOneAndUpdate(query, newData, { new: true });
            if (docs) {
                res.redirect("/frame");
            } else if (!docs) {
                res.json({ ok: false, message: "USER IS NOT VALID, CHECK FOR ID. " })
            } else {
                res.send({ ok: false, message: "SOMETHING WENT WRONG." });
            }
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'addframe'
        });
    }
};

// SEND ALL THE FRAMES TO FRONTEND
const getfram = async (req, res) => {
    try {
        let frames = await eventModel.find({});
        console.log(frames);
        if (frames.length > 0) {
            res.json({ data: frames });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'getframe'
        });
    }
}

// RETRIVE OF ALL USER DATA
const user = async (req, res) => {
    try {
        let data = await userModel.find({}).sort({ _id: -1 });
        if (data) {
            res.render("user", { records: data })
        } else {
            throw new Error("data not found");
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'user'
        });
    }
}

// RETRIVE OF ALL FRAME DATA
const frame = async (req, res) => {
    try {
        let data = await eventModel.find({});
        if (data) {
            res.render("frame", { frames: data, updateframe: "testtest" })
        } else {
            throw new Error("data not found");
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'frame'
        });
    }
}

// DELETETION OF FRAME 
const eventdelete = async (req, res) => {
    var items = []
    try {
        for (var key in req.body) {
            items = req.body[key]
        }
        let docs = await eventModel.deleteMany({ _id: { $in: items } });
        if (docs) res.json(data);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'eventdelete'
        });
    }
}

// FOR DELETING OF USER
const userdelete = async (req, res) => {
    try {
        console.log("in userdelet3");
        var items = []
        var delS3 = []
        console.log("body: " + JSON.stringify(req.body));
        for (var key in req.body) {
            items = req.body[key]
        }
        console.log("items: " + items);
        console.log("in user delete4");
        let data = await userModel.find({ _id: { $in: items } });
        if (data) {
            for (i = 0; i < data.length; i++) {
                if (data[i].user_image && data[i].user_image !== "default.png") {
                    delS3.push(data[i].user_image)
                    console.log("dels3: " + delS3);
                }
            }
            for (j = 0; j < delS3.length; j++) {

                let params = {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: delS3[j]
                };

                s3.deleteObject(params, (err, data) => {
                    if (err) throw new Error(err.message)
                });
            }
        }
        let docs = await userModel.deleteMany({ _id: { $in: items } });
        if (docs) res.redirect("/user");
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'userdelete'
        });
    }
};

// FOR PRE-UPDATING ONE FRAME
const framepreupdate = async (req, res) => {
    try {
        var id = req.body.id || req.params.id;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new Error("NOT VALID ID.");
        }
        var query = { _id: id };
        let frames = await eventModel.find({});
        if (frames.length == 0) {
            res.render('frame', {
                frames: false,
                updateframe: "undefined"
            });
        } else if (frames.length > 0) {
            let docs = await eventModel.findOne(query);
            if (docs) {
                docs.test = "test";
                res.render('frame', {
                    updateframe: docs,
                    frames: frames
                });
            } else {
                res.send({ ok: false, message: "SOMETHING WENT WRONG." });
            }
        } else {
            res.send({ ok: false, message: "SOMETHING WENT WRONG." })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            location: 'framepreupdate'
        });
    }
}
const getzsm = async (req, res) => {
    try{

  console.log(__dirname + "/" + req.body.division + ".csv");
  var csvFilePath = __dirname + "/" + req.body.division + ".csv";
  const jsonObj = await csv().fromFile(csvFilePath);
  var zsmdata = tojson.ZSM(jsonObj, "div");
  res.send({ ok: true, data: zsmdata });
    } catch(error){
        console.log('error @ getzsm: ' + error.message);
    }
};

const getrm = async (req, res) => {
  var csvFilePath = __dirname + "/" + req.body.division + ".csv";
  const jsonObj = await csv().fromFile(csvFilePath);
  var rmdata = tojson.RM(jsonObj, req.body.zsm);
  res.send({ ok: true, data: rmdata });
};

const gettm = async (req, res) => {
  var csvFilePath = __dirname + "/" + req.body.division + ".csv";
  const jsonObj = await csv().fromFile(csvFilePath);
  var tmdata = tojson.TM(jsonObj, req.body.zsm, req.body.rm);
  res.send({ ok: true, data: tmdata });
};

const gethq = async (req, res) => {
  var csvFilePath = __dirname + "/" + req.body.division + ".csv";
  const jsonObj = await csv().fromFile(csvFilePath);
  var hqdata = tojson.HQ(jsonObj, req.body.zsm, req.body.rm, req.body.tm);
  res.send({ ok: true, data: hqdata });
};

// EXPORT 
module.exports = {
    index,
    adduserdata,
    addframe,
    getfram,
    user,
    frame,
    userdelete,
    eventdelete,
    framepreupdate,
  getzsm,
  getrm,
  gettm,
  gethq,
}