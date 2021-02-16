const express = require('express');
const {Pool}  = require('pg');
const app     = express();
const cors    = require("cors");
const port = process.env.PORT || 3000


const dotenv=require('dotenv');
dotenv.config();
app.use(cors());

const alldata=require("./routes/alldata")


app.use("/",alldata);
app.listen(port,()=>{console.log("server running")});