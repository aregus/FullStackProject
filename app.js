var express = require('express');


var app = express();

app.get('/', function (req, res){
    res.send('Hello Dev!');
})


app.listen(5000, function (){
    console.log('Dev app listening to post 5000');
})
