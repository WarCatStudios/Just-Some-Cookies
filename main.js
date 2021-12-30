const Discord = require('discord.js');
require('dotenv').config();
const mongoose = require("mongoose");

const client = new Discord.Client(); 
//https://discord.com/oauth2/authorize?client_id=778897544578596884&scope=bot&permissions=8589934591




client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false
}).then(() =>{
    console.log('Connected to the Data base woooooooo');
})
.catch((err) =>{
    console.log(err);
});


client.login(process.env.DISCORD_TOKEN);