//-----Require-----//
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//-----Base Route to Find/Create-----//
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

//-----Route to See Current Json-----//
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

//-----Export-----//
module.exports = router;
