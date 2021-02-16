const express = require('express');
const {Pool}  = require('pg');
const app     = express();
const cors    = require("cors");
const port = process.env.PORT || 3001;
const bodyParser = require("bodyParser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const dotenv=require('dotenv');
dotenv.config();
app.use(cors());

const alldata=require("./routes/alldata")


app.use("/",alldata);
app.listen(port,()=>{console.log("server running")});