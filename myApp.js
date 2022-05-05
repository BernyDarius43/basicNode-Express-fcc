let express = require('express');
let absolutePathCss = __dirname + '/public'
express.static(absolutePathCss)

let app = express();
app.use(absolutePathCss)
var absolutePath =  __dirname + '/views/index.html'

app.get('/', (req, res) => {
    //res.send('Hello Express')
    res.sendFile(absolutePath)
    // console.log(`Hello World! WOOOO!`);
  });

 module.exports = app;
