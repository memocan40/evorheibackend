const express = require("express");
const router = express.Router();

const getAllData = require("../controller/allData");

router.get("/", getAllData.logAllData);

module.exports = router;
