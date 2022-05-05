let express = require('express');
let app = express();
let absolutePath = './views/index.html'

app.get('/', (req, res) => {
    //res.send('Hello Express')
    res.sendFile(absolutePath)
    // console.log(`Hello World! WOOOO!`);
  });

 module.exports = app;
