var express = require('express');  //handling http connection
var morgan = require('morgan');        //output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req,res){
    
    res.send("Araticle 1 requested will be saved here");
    
});


app.get('/articl2',function(req,res){
    
    res.send("Araticle 2 requested will be saved here");
    
});


app.get('/article3',function(req,res){
    
    res.send("Araticle 3 requested will be saved here");
    
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
