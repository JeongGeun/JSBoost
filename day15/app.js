var express = require('express');
var app = express();
var fl=require("./file.json")

app.get('/', function(req, res) {
  res.send(fl);
});

app.get('/:id', function(req, res) {
  str=[]  
  for(let i in fl["board"])
    {
      for(let j in fl["board"][i])
      {
        if(fl["board"][i][j]==`${req.params.id}`)
          {
            str.push(fl["board"][i])
            break;
          }
      }
    }
    let obj=new Object()
    obj.board=str
    res.send(JSON.stringify(obj))
});
  
app.listen(9000, function(){
    console.log('Conneted 9000 port!');
});