//-----Require-----//
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//-----Book Route-----//
router.use("/books", bookRoutes);

//-----Google Route-----//
router.use("/google", googleRoutes);

//-----Render Homepage-----//
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

//-----Export-----//
module.exports = router;
