module.exports = {
    name: 'spam',
    aliases: [],
    cooldown: 10,
    permissions: [],
    description: "this shit is a test command", 
    async execute(client, message, cmd, args, Discord, profileData){
        

        if (cmd === 'spam') {
            console.log(message.channel.name);
            console.log(message.author.username);
            var channelName = message.channel.name;
            var sContent = args[0];
            var messageCap = args[1];
            var messageNum = 0;

            const mentiontarget = message.mentions.users.first()

            console.log(messageCap);

            if (isNaN(messageCap)){
                return message.channel.send('no')
            }
            else if (!args[0]){
                return message.channel.send('what u wanna spam');
            }
            else if (!args[1]){
                var messageCap = 10;
            }

            if (channelName.includes('spam')) {
                if (args[2] === 'debug') {
                    var spamTime = true;
                    console.log(spamTime);
                }
                if (messageNum > 200){
                    return message.channel.send('too high');

                }
                if (mentiontarget != message.author){
                    console.log(profileData.admin);
                    if (profileData.admin === 1 || profileData.tester === 4 || profileData.dev === 4){
                        var spamTime = true;
                        console.log(spamTime);
                    }
                    else {
                        return message.channel.send('you can\'t spam ping, you need to be an admin, tester, or dev to spam ping');
                    }
                }
                
                if (!messageCap){
                    return message.channel.send('how many messages you wanna send')
                }
                else if (sContent === 'salad_tf2'){
                    var sContent = 'https://cdn.discordapp.com/attachments/746079362855731290/852652866727968808/tenor_24.gif'
                    var spamTime = true;
                }
                else if (sContent === 'bunger_eat') {
                    message.channel.send('https://cdn.discordapp.com/attachments/847474629295603743/861891252633862224/image0-41.gif');
                    var sContent = "https://cdn.discordapp.com/attachments/847474629295603743/861891252912128000/image0-50.gif";
                    var spamTime = true;
                }
                else if (sContent === '😔'){
                    var sContent = 'https://cdn.discordapp.com/attachments/847474629295603743/862073101679984650/pensive2.gif';
                    var spamTime = true;

                }
                else{
                    var spamTime = true;
                    console.log(spamTime);
                }

                if (!args[2]){
                    while (spamTime === true) {

                        await message.channel.send(sContent);
                        messageNum += 1;
                        console.log(messageNum);
    
                        if (messageNum >= messageCap){
                            var spamTime = false;
                            return;
                        }
                    }
                }
                else{
                    while (spamTime === true) {

                        await message.channel.send(sContent);
                        messageNum += 1;
                        console.log(messageNum);
    
                        if (messageNum >= messageCap){
                            var spamTime = false;
                            message.channel.send(`finished spamming "${sContent}" ${messageCap} times. Requested by ${message.author.username}`);
                            return;
                        }
                    }
                }
            }
            else {
                message.channel.send('the channel needs to be named spam for this to work');
            }

        }

    }

}