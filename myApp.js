let express = require('express');
let app = express();
let absolutePath =  __dirname + '/views/index.html'
let absolutePathCss = __dirname + '/public'
app.use('/public', express.static(absolutePathCss))

app.get('/', (req, res) => {
    //res.send('Hello Express')
    res.sendFile(absolutePath)
    // console.log(`Hello World! WOOOO!`);
  });

 module.exports = app;
