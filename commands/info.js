module.exports = {
    name: 'info',
    aliases: ['help', 'commands'],
    permissions: [],
    description: "EMBEDS BABYYYY",
    execute(client, message, cmd, args, Discord){
        if (cmd === 'info'){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Just Some Cookies')
            .setDescription("Information about War Cat Studios' random ass discord bot he made in 2 days (PREFIX: +)")
            .addFields(
                {name: 'Reason Bot Exists?', value: 'because I got bored and wanted to do something, fight me.'},
                {name: 'Guides', value: '`geconomy`, `gcmds`'},
                {name: 'Shameless Promo', value: 'use "+social"'},
                {name: 'Command List', value: 'use "+commands"'}
            )
            .setFooter('Sub to War Cat Studios on YT')
    
            message.channel.send(newEmbed);
        }

        if (cmd === 'help'){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Just Some Cookies')
            .setDescription("Information about War Cat Studios' random ass discord bot he made in 2 days (PREFIX: +)")
            .addFields(
                {name: 'Reason Bot Exists?', value: 'because I got bored and wanted to do something, fight me.'},
                {name: 'Guides', value: '`geconomy`, `gcmds`'},
                {name: 'Shameless Promo', value: '`social`'},
                {name: 'Command List', value: 'use "`commands`"'}
            )
            .setFooter('any text that has a dark box around is supposed to be a command')
    
            message.channel.send(newEmbed);
        }

        if (cmd === 'commands'){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Commands')
            .setDescription("Every command in the Just Some Cookies discord bot!")
            .addFields(
                {name: 'Informational/Cool Commands', value: '`mcserver`, `info`, `guide`'},
                {name: 'Fun Shit', value: '`spam`, `meme`'},
                {name: 'Economy Commands', value: '`beg`, `work`, `balance`, `deposit`, `withdraw`, `profile`'},
                {name: 'Moderation Commands', value: '`clear`, `kick`, `mute`, `unmute`'},
                {name: 'Misc. Commands (test/jokes)', value: '`ping`, `pong`, `pog`, `textgen`, `dabup`, `avatar`'}
            )
            .setFooter('any text that has a dark box around is supposed to be a command')
    
            message.channel.send(newEmbed);
        }
            
    }
}
