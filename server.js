// bare bones
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// create an express route for the home page
//get
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen
app.listen(8080);
console.log('Server has started!');

//mathy stuff -- take type and decides process (w/ switch statement)
app.post('/calculate', function(req, res) {
  var objectToReturn = {
    answer: 0
  };
  var x = Number(req.body.x);
  var y = Number(req.body.y);

//switch
  switch (req.body.type) {
    case 'add':
      objectToReturn.answer= x + y;
      break;
    case 'subtract':
      objectToReturn.answer= x - y;
      break;
    case 'multiply':
      objectToReturn.answer= x * y;
      break;
    case 'divide':
      objectToReturn.answer= x / y;
      break;

  }
  res.send(objectToReturn);
});
