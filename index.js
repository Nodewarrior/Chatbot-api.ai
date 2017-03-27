'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')

cont app = express();

app.set('port', (process.env.PORT || 5000))

//Allows to process data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTE
app.get('/', function(req, res) {
	res.send("Welcome i am talkbot!")
})

//Facebook

app.get('/webhook/', function(req, res) {
	if(req.query['hub.verify_token'] === "gone") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.listen(app.get('port'), function(){
	console.log("running: port")
})