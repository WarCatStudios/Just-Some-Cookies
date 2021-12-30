module.exports = {
    name: 'ping',
    aliases: ['pong', 'pog', 'textgen', 'avatar', 'cookie'],
    permissions: [],
    description: "this shit is a test command",
    execute(client, message, cmd, args, Discord, profileData) {
        if (cmd === 'ping') {
            if (message.author.id === "663810564534829075") {
                message.channel.send('ughh, what the fuck do you want, war cat?');
            }
            else if (message.author.id === "397723507212943363") {
                message.channel.send('lmao, hello woman');
            }
            else if (message.author.id === "846153944752455711") {
                message.channel.send('YOU ARE LITERALLY THE MOST ANNOYING PERSON HERE, STOP USING THIS COMMAND!!!! >:((((');
            }
            else if (message.author.id === "356032785842176000") {
                message.channel.send('LEGEND YOU ARE JUST AS FUCKING ANNOYING AS WAR CAT SHUYREUYGKSUFYGKUSFYGGFLOSIFS');
            }
            else {
                message.channel.send(`ughh, what the fuck do you want, ${message.author.username}`);
            }
        }
        else if (cmd === 'pong') {
            message.channel.send('im not fucking playing ping pong with you, please go away');
        }
        else if (cmd === 'pog') {
            const fEmoji = client.emojis.cache.get('851712428617760778')
            message.channel.send(`the meme is over, get over it. ${fEmoji}`);
        }
        else if (cmd === 'textgen') {
            var mspaintwindy = '';
            const randomNumber = Math.floor(Math.random() * 10) + 1;

            if (randomNumber === 1) {
                var randoTxt = 'I can\'t live without you';
            }

            if (randomNumber === 2) {
                var randoTxt = 'shoot to shoot the gun';
            }

            if (randomNumber === 3) {
                var randoTxt = 'Cone Clicker, coming "soon"';
            }

            if (randomNumber === 4) {
                var randoTxt = 'The answer; use a gun';
            }

            if (randomNumber === 5) {
                var mspaintwindy = client.emojis.cache.get('779522243004071946');
                var randoTxt = '';
            }

            if (randomNumber === 6) {
                var randoTxt = 'Bad Apple is a good song';
            }

            if (randomNumber === 7) {
                var randoTxt = 'Shoutout to nim_nim and gunther for getting me addicted to Jo Jo';
            }

            if (randomNumber === 8) {
                var randoTxt = 'Send Nudes ;)';
            }

            if (randomNumber === 9) {
                var randoTxt = 'wdym I\'m backdooring discord servers, I would never';
            }

            if (randomNumber === 10) {
                var randoTxt = 'Three little words: Get. Fucked. Nerd.';
            }

            return message.channel.send(`${mspaintwindy} \n${randoTxt}`);
        }

    
        if (cmd === 'avatar') {
            const user = message.author;
    
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }

        if (cmd === 'cookie'){
            
        }

    }


}