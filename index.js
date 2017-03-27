'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')

cont app = express();

const port = process.env.PORT || 8000
/*app.listen(port, function() {
	console.log("App is running on port " + port)
}) */

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

app.listen(port, function() {
	console.log("running: port" + port)
})