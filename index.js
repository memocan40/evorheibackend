const express = require('express');
const {Pool}  = require('pg');
const app     = express();
const port      =3001;


const dotenv=require('dotenv');
dotenv.config();

const alldata=require("./routes/alldata")


app.use("/",alldata);
app.listen(port,()=>{console.log("server running")});