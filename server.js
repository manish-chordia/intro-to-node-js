const express = require("express");
const path = require("path");

const complements = [
	"You look nice today",
	"That dress looks nice on you",
	"Have you been working out?",
	"You can do hard things",
	"You've gotten far in this course. You're really smart",
	"You're programming! How cool is that?",
	"I'm really proud of you",
	"You made this",
	"You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
	"You don't look nice today",
	"That dress doesn't look nice on you.",
	"You need to work out.",
	"I'm really ashamed of you.",
	"You didn't do anything."
];

function getRandomComplement() {
  	const randomIndex = Math.floor(Math.random() * complements.length);
	return complements[randomIndex];
}

function getRandomInsult() {
	const randomIndex = Math.floor(Math.random() * insults.length);
	return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
	res
    .json({
    	complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
	res.json({insult: getRandomInsult()}).end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");