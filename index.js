var express = require('express');
var app = express();

const n=[1,2,3,4];
app.get('/',function(req,res){
    res.json(n);
})
// app.get('/hello',function(req,res){
//     res.send("hello  world");
// })
app .listen(5000);