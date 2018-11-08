
var express = require("express");
var cors = require("cors");
var favicon = require('serve-favicon')
var path = require('path')

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Accept");
//  res.header("Content-Type", "application/json; charset=utf-8");
  res.header("X-Content-Type-Options", "nosniff");
  next();
});

app.options("*", cors());

app.use(express.static('public'))

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

app.get("/dishes", (req, res, next) => {
  const returnValue = obj['dishes'];
  res.json(returnValue);
});

app.get("/comments", (req, res, next) => {
  const returnValue = obj['comments'];
  res.json(returnValue);
});

app.get("/promotions", (req, res, next) => {
  const returnValue = obj['promotions'];
  res.json(returnValue);
});

app.get("/leaders", (req, res, next) => {
  const returnValue = obj['leaders'];
  res.json(returnValue);
});

app.get("/feedback", (req, res, next) => {
  const returnValue = obj['feedback'];
  res.json(returnValue);
});

app.use(function(req, res){
       res.json({});
});

// app.use(cors({ origin: false }));
app.listen(80, () => {
  console.log("Server started on port 3001");
});

