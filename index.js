var express = require('express')
var app = express()
var data = require('./data.js')
 

app.get('/', function (req, res) {
    res.json(data.inc)
})
 
app.listen(3000)