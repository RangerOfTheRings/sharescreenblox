var express = require("express")
 
var app = express();
 
app.use('/rbxwebhook', require(../PATH/TO/ROUTER/FILE))
 
app.get('/', (req, res) => {
  res.send("Howdy")
});
 
 
app.listen(3000);