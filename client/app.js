var express = require('express');
var adminApp = express()
var router = express.Router()
adminApp.use(express.static(__dirname + '/public'))

router.get('/', function(req, res){
    res.sendFile( __dirname + '/public/mockup.html')
})

adminApp.use('/', router)

module.exports = adminApp