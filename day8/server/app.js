var express = require('express');
var data=require('./data').data
var todo=require('./data').todoList
var app = express();
arr=[data,todo]
app.get('/', function (req, res) {
    res.send(arr);
});

app.listen(8090, function () {
  console.log('Example app listening on port 3000!');
});