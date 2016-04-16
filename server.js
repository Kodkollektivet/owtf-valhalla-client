'use strict'
var express = require('express');
var admin = require('./client/app');

var port = process.env.PORT || 8080

var app = express()
app.use('/admin',admin)

app.listen(port)
