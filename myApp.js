var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
    console.log(`Hello World! WOOOO!`);
  });

 module.exports = app;
