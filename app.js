const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
var formidable = require('formidable');
const imageModel = require("./Model/imageModel");
const infoModel = require("./Model/infoModel");

 
 
app.use(bodyParser.urlencoded(
      { extended:true }
))
 
app.set("view engine","ejs");
 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
 
var upload = multer({ storage: storage })
 
app.get("/",(req,res)=>{
    res.render("index");
})
 
app.post("/upload",upload.single('myImage'),(req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };
    imageModel.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
    infoModel.create(String,function(err,result){
      if(err){
          console.log(err);
      }else{
          console.log(result.img.Buffer);
          console.log("Saved To database");
          res.contentType(final_img.contentType);
          res.send(final_img.image);
      }
  })


  var form = new formidable.IncomingForm();
  var fullName, userName, email;

  form.parse(req, function(err, fields, files) {
      if (fields) {
          fullName = fields.fullName;
          userName = fields.userName;
          email = fields.email;
      }

 
      User.create({
          FullName: fullName,
          userName: userName,
          email: email,
      
      });
  });


})



app.post("/upload",upload.single('cv'),(req,res)=>{
  var cv = fs.readFileSync(req.file.path);
  var encode_img = cv.toString('base64');
  var final_img = {
      contentType:req.file.mimetype,
      image:new Buffer(encode_img,'base64')
  };
  imageModel.create(final_img,function(err,result){
      if(err){
          console.log(err);
      }else{
          console.log(result.cv.Buffer);
          console.log("Saved To database");
          res.contentType(final_img.contentType);
          res.send(final_img.image);
      }
  })
  infoModel.create(String,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result.cv.Buffer);
        console.log("Saved To database");
        res.contentType(final_img.contentType);
        res.send(final_img.image);
    }
})


var form = new formidable.IncomingForm();
var fullName, userName, email;

form.parse(req, function(err, fields, files) {
    if (fields) {
        fullName = fields.fullName;
        userName = fields.userName;
        email = fields.email;
    }


    User.create({
        FullName: fullName,
        userName: userName,
        email: email,
    
    });
});


})



app.post("/upload",(req,res)=>{


var form = new formidable.IncomingForm();
var fullName, userName, email;

form.parse(req, function(err, fields, files) {
    if (fields) {
        fullName = fields.fullName;
        userName = fields.userName;
        email = fields.email;
    }


    User.create({
        FullName: fullName,
        userName: userName,
        email: email,
    
    });
});


})


//Code to start server
app.listen(3000,function () {
      console.log("Server Started at PORT 2000");
})