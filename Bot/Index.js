const { Client } = require("discord.js");
const { config } = require("dotenv");
const client = new Client({ disableEveryone: true });
const { token, showTimeStamp, showChannel, clearOn, showServer, userShown, status, statusText, statusType, statusURL, LogCertain, LogUser, LogServer, LogChannel } = require('./Config.json'); // LogLinks
// const prompt = require('prompt-sync')();
const Discord = require('discord.js');
const editJsonFile = require("edit-json-file");
let filem = editJsonFile(${__dirname}/logs.json);
// let fileL = editJsonFile(${__dirname}/linksLog.json);
const data1 = "";
//hey faggots, forgot i had this small thing i was working on in november and finished it for you fuckers. practical use? next to none. also don't mind me using a stupid ass API just to edit a json file
//lM is short for loggedMessage
var lM = [];
client.on("ready", () => {
    console.log("Script is Active, logged into " + client.user.tag);
    //if the status type is set to streaming
    if(statusType == "STREAMING"){
        client.user.setPresence({
            status: status,
            game: {
                name: statusText,
                type: 'STREAMING',
                url: statusURL
            }
        });
    }
    //if there is a status type but not streaming
    else if(statusType != null){
        client.user.setPresence({
            status: status,
            game: {
                name: statusText,
                type: statusType
            }
        });
    }
    //if there is no special status type
    else{
        client.user.setPresence({
            status: status,
            game: {
                name: statusText
            }
        });
    }
});
var messageNum = parseInt(clearOn) + 1;
client.on('message', msg => {
    lM = [];
    //variables to be referenced when constructing the thing to be logged
    var name, channel, server, timestamp;


    //calls on the data to see what part of the user is to be shown and stores it in a variable which makes me not have to make a bunch of if else if else chains inside of each identifier
    if(userShown == "fullTag"){
        name = "" + msg.author.tag;
    }
    else if(userShown == "ID") {
        name = "" + msg.author.id;
    }
    else{
        name = "" + msg.author;
    }


//json added the true/false inputs as strings and i'm too lazy to parse it all to booleans if i can just do a funny with the quotation marks

    //checks if the channel is to be stored
    if(showChannel == "true"){
        channel = " said in " + msg.channel.name;
    }
    else{
        channel = "";
    }

    //checks if the server is to be stored
    if(showServer == "true"){
        server = " in " + msg.guild.name;
    }
    else{
        server = "";
    }

    //checks if the timestamp is to be stored
    if(showTimeStamp == "true"){
        timestamp = "\t " + msg.createdAt;
    }
    else{
        timestamp = "";
    }
//if i don't do this and someone sends you a DM the script will crash, this checks for server ids so it knows the message is being sent inside of a server and not a dm or group chat
    if (msg.guild.id != null) {
        //checks if the message is in a server or channel being logged
        if (LogChannel != null && LogServer != null && LogUser == "" && LogCertain == "false"){
            if(msg.channel.id == LogChannel){
                messageNum--;
                //if the number of logged messages to be displayed at once is exceeded, it will clear and reset the counter.
                if(messageNum < 1){
                    messageNum = clearOn;
                    console.clear();
                }
                console.log(name + channel + server + ": " + msg.content + " " + timestamp);
                lM.push({ t: msg.createdAt.toLocaleString(), m: name + channel + server + ": " + msg.content});
                //saves the logged thing to a json logs file
                let data = JSON.stringify(lM);
                filem.set(data, data1);
                filem.save();
            }
        }
if(LogServer != "" && msg.guild.id == LogServer && LogUser == "" && LogCertain == "false"){
                messageNum--;
                //if the number of logged messages to be displayed at once is exceeded, it will clear and reset the counter.
                if(messageNum < 1){
                    messageNum = clearOn;
                    console.clear();
                }
                console.log(name + server + ": " + msg.content + " " + timestamp);
                lM.push({t: msg.createdAt.toLocaleString(), m: name + server + ": " + msg.content});
                //saves the logged thing to a json logs file
                let data = JSON.stringify(lM);
                filem.set(data, data1);
                filem.save();
        }
        if(LogUser != null && msg.author.id == LogUser){
            messageNum--;
            //if the number of logged messages to be displayed at once is exceeded, it will clear and reset the counter.
            if(messageNum < 1){
                messageNum = clearOn;
                console.clear();
            }
console.log(name + channel + server + ": " + msg.content + " " + timestamp);
                lM.push({t: msg.createdAt.toLocaleString(), m: name + channel + server + ": " + msg.content});
                //saves the logged thing to a json logs file
                let data = JSON.stringify(lM);
                filem.set(data, data1);
                filem.save();
        }
        //checks if a certain phrase was sent
        if(LogCertain != null && msg.includes == LogCertain && LogUser == ""){
            messageNum--;
            //if the number of logged messages to be displayed at once is exceeded, it will clear and reset the counter.
            if(messageNum < 1){
                messageNum = clearOn;
                console.clear();
            }
            console.log(name + channel + server + ": " + msg.content + " " + timestamp);
                lM.push({t: msg.createdAt.toLocaleString(), m: name + channel + server + ": " + msg.content});
                //saves the logged thing to a json logs file
                let data = JSON.stringify(lM);
                filem.set(data, data1);
                filem.save();
        }
}



    else{}
});


client.login(token);