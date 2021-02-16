const express = require("express");
const router = express.Router();
const pool =require("../dbconfig");


const getAllData = require("../controller/allData");

router.get("/", getAllData.logAllData);
router.post('/data',async(req, res) => {
        const {data} = req.body;

        try {
            const answerDB = await pool.query('INSERT INTO evorhei (data) VALUES ( $1)', [data]);
            res.json({
                message: "New data with the following values:" + [data],
                code: 200,
                description: "added" + [data],
                data: answerDB.rows
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
});

module.exports = router;
