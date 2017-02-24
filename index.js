var express = require('express')
var app = express()
var data = require('./data/data.js')
 

//display the api on: http://52.14.154.146/
app.get('/', function (req, res) {
    res.json(data.inc)
})
app.listen(80)