const express = require("express");
const router = express.Router();


const getAllData = require("../controller/allData");

router.get("/", getAllData.logAllData);
router.post('/data', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

module.exports = router;
