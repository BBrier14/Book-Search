//-----Require-----//
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

//-----Home Route uses Google Controller-----//
router.route("/").get(googleController.findAll);

//-----Export-----//
module.exports = router;
