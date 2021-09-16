const express = require("express");
const route = express.Router();

// IMPORT CONTROLLERS
const controllers = require("../controllers/index.controller");

// IMPORT UPLOAD USER IMAGE & FREAMES
const uploadUser = require("../services/index.user");
const uploadFrame = require("../services/index.frame");

//ROUTES
route.post("/adduserdata", uploadUser.single('user_image'), controllers.adduserdata);

route.get("/getfram", controllers.getfram)

route.get("/", controllers.index);

route.get("/user", controllers.user);

route.post("/user/delete", controllers.userdelete);

route.get("/frame", controllers.frame);

route.post("/frame/delete", controllers.eventdelete);

route.get("/frame/preupdate/:id", controllers.framepreupdate);

route.post("/addframe", uploadFrame.single("ev_image"), controllers.addframe);

route.post("/getzsm", controllers.getzsm);
route.post("/getrm", controllers.getrm);
route.post("/gettm", controllers.gettm);
route.post("/gethq", controllers.gethq);


// EXPORT ROUTES
module.exports = route;