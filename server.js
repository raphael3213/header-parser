// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//
app.use(express.static('public'));


app.get("/", function (request, response) {
  
  var string=request.header('user-agent');
  var arr=string.split('(')
  arr=arr[1].split(')');
  var arrer=request.header('accept-language').split(',')
 var ip=request.header('x-forwarded-for').split(',')[0];
  //console.log(arr[0]);
  //console.log(arrer[0]);
  response.json({"ipaddress":ip,"lang":arrer[0],"software":arr[0]});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
