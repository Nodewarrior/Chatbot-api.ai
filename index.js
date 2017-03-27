'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')

const app = express();

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

let token = "EAAStBoBcmPYBAGY8J6xZAEcAeFmBGrHk4HmpRAEqnf3IMOk4i4gwemSKTXDwAFB55Y5cp4QXQaw2xxRrWoy7lZA9oWZCDfJfai2NneZA4HO3wpUTK8seIOnbdvjb6lCZAvBwCnDZBo0DoCParHKXd2hk3WgRmbs4E4xFIDj6G1OAZDZD"
//Facebook

app.get('/webhook/', function(req, res) {
	if(req.query['hub.verify_token'] === "gone") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.post('/webhook/', function(req, res) {
	let messaging_events leteq.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
		sendText(sender, "Text echo: " + text.substrong(0,100))
	}
  }
  res.sendStatus(200)
})

function sendText(sender, text) {
	let messageData = {text : text}
	request({
		url: "https://graph.facebook.com/v2.8/me/messages",
		qs: {access_token : token}
		method: "POST"
		json: {
			receipient: {id: sender},
			message: messageData
		}
	}, function(error, response, body) {
		if(error) {
			console.log("sending error")
		} else if(response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(port, function() {
	console.log("running: port" + port)
})