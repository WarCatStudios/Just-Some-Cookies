const profileModel = require("../models/profileSchema");
module.exports = {
    name: "beg",
    aliases: ['work'],
    cooldown: 3,
    permissions: [],
    description: "beg for coins",
    async execute(client, message, cmd, args, Discord, profileData) {
        if (cmd === 'beg'){
            const randomNumber = Math.floor(Math.random() * 500) + 1;
            
             
            const messageNum = Math.floor(Math.random() * 10) + 1;
    
            if (messageNum === 1){
                return message.channel.send(`${message.author.username}, Sold feet pics and recived **${randomNumber} Cookies**`);
            }
            else if (messageNum === 2){
                return message.channel.send(`${message.author.username}, Streamed on Twitch and recived **${randomNumber} Cookies**`);
            }
            else if (messageNum === 3){
                return message.channel.send(`${message.author.username}, Updated Windows and found **${randomNumber} Cookies**`);
            }
            else{
                return message.channel.send(`${message.author.username}, Got a coding bug and was recived **${randomNumber} Cookies**`)
            }
        }

        if (cmd === 'work'){
            const bigcook = profileData.cookies + profileData.bank;
            if (bigcook < 25000) return message.channel.send('You need 25k to use work');
            const randomNumber = Math.floor(Math.random() * 10000) + 1;
            var response = await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        cookies: randomNumber,
                    },
                }
            );

            const messageNum = Math.floor(Math.random() * 10) + 1;
    
            if (messageNum === 1){
                return message.channel.send(`${message.author.username}, Stopped procrastinating and got**${randomNumber} Cookies**`);
            }
            else if (messageNum === 2){
                return message.channel.send(`${message.author.username}, Developed a game and recived **${randomNumber} Cookies**`);
            }
            else if (messageNum === 3){
                return message.channel.send(`${message.author.username}, Click-baited children and got **${randomNumber} Cookies**`);
            }
            else if (messageNum === 4){
                return message.channel.send(`${message.author.username}, Looked through this bots github and got **${randomNumber} Cookies**`);
            }
            else if (messageNum === 5){
                return message.channel.send(`${message.author.username}, Subbed to War Cat's YT and obtained **${randomNumber} Cookies**`);
            }
            else if (messageNum === 6){
                return message.channel.send(`${message.author.username}, Made an Excel Spreadsheet and was paid **${randomNumber} Cookies**`);
            }
            else if (messageNum === 7){
                return message.channel.send(`${message.author.username}, Wore a buisness suit and was paid **${randomNumber} Cookies**`);
            }
            else{
                return message.channel.send(`${message.author.username}, Fucked your mom and got **${randomNumber} Cookies**`)
            }
        }
    },
};