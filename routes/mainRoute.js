//Libraries are imported
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

//Home route is required
router.get("/", mainController.displayPage);

//Object is exported
module.exports = router;
