const pool = require("../dbconfig");



const getAllData = {
  logAllData: async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM evorhei");
      
        res.json({
        code: 200,
        operation: "success",
        description: "Fetched all posts",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },
};

module.exports = getAllData;
