var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log(`Hello World! WOOOO!`);
  });

 module.exports = app;
