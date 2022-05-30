let express = require('express');
require('dotenv').config()
let app = express();
let absolutePath = __dirname + '/views/index.html'
let absolutePathCss = __dirname + '/public'
app.use('/public', express.static(absolutePathCss))

app.get('/', (req, res) => {
  //res.send('Hello Express')
  res.sendFile(absolutePath)
  // console.log(`Hello World! WOOOO!`);
});
app.get('/json', (req, res) => {
  var response = "hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  } 
   res.json({message: response})
});
module.exports = app;
