const { config } = require("dotenv");
const { stuff } = require('./Config.json');
const prompt = require('prompt-sync')();
const fs = require('fs');
const readline = require("readline");
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`${__dirname}/Config.json`);

//token, showTimeStamp, showChannel, clearOn, showServer, userShown, status, statusText, statusType, statusURL, LogCertain, LogLinks, LogUser, LogServer, LogChannel
var info;

console.log("EVERYTHING YOU TYPE IS CASE SENSITIVE");

var token = prompt("Enter your token: ");
var timestamp = prompt("enter true or false , would you like the timestamp to be logged: ");
var usershown = prompt("what would you like of the user to be shown. enter fullTag, ID, or username): ");
var status = prompt("your status will be the next couple questions enter one of the following: online, idle, dnd, or offline): ");
var statustext = prompt("what would you like to be your status text, enter the text here: ");
var statustype = prompt("what would you like to be the status type enter PLAYING, LISTENING, STREAMING, or WATCHING: ");
var statusurl = prompt("enter the status URL, must start with https and preferably be a twitch link: ");
var logcertain = prompt("If you would like to search for a certain phrase embedded in a message, enter it below, else enter false: ");
var loglinks = prompt("Enter true or false, would you like to log links? ");
var userlogged = prompt("If you would like to log a certain user, enter their user ID below: ");
var logserver = prompt("Enter the ID of a server you would like to log below: ");
var logchannel = prompt("if you would like to log a specific channel in this server, enter the channel ID below: ");
var clearon = prompt("how many messages would you like to show up at once, enter a whole number: ");
var showchannel = prompt("true or false, show the channel message was logged in console: ");
var showserver = prompt("true or false, show server message was logged in console: ");


if(true){
	file.set("token", "" + token + "");
	file.set("showTimeStamp", "" + timestamp + "");
	file.set("userShown", "" + usershown + "");
	file.set("status", "" + status + "");
	file.set("statusText", "" + statustext + "");
	file.set("statusType", "" + statustype + "");
	file.set("statusURL", "" + statusurl + "");
	file.set("LogCertain", "" + logcertain + "");
	file.set("LogLinks", "" + loglinks + "");
	file.set("LogUser", "" + userlogged + "");
	file.set("LogServer", "" + logserver + "");
	file.set("LogChannel", "" + logchannel + "");
	file.set("clearOn", "" + clearon + "");
	file.set("showChannel", "" + showchannel + "");
	file.set("showServer", "" + showserver + "");
	file.save();
	console.log("You are all set! You may now close this window.");
}