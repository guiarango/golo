const express = require("express");
const router = express.Router();
const aboutUsController = require("../controllers/aboutUsController");

router.use("/", aboutUsController.displayPage);

module.exports = router;
