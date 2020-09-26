const express=require("express");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const Certificate=require('./models/user')
require('./models/db')
const app=express();
const router=require('../routes')
const multer=require('multer');
const jimp=require('jimp');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(router)





app.listen(3000,() =>console.log("server started"));

