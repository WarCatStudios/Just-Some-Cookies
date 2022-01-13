module.exports = {
    name: 'info',
    aliases: ['help', 'commands', 'cdocs'],
    permissions: [],
    description: "EMBEDS BABYYYY",
    execute(client, message, cmd, args, Discord){

        if (cmd === 'help' || cmd === 'info'){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Just Some Cookies')
            .setURL('https://www.patreon.com/warcat')
            .setDescription("(PREFIX: +) In depth info about Just Some Cookies and other related products, if you would like to support the project use `donate`")
            .setThumbnail('https://cdn.discordapp.com/avatars/778897544578596884/f712f817f7853bbbd908ded8242b1622.png?size=4096')
            .setURL('https://www.patreon.com/warcat')
            .addFields(
                {name: 'Reason Bot Exists?', value: 'because I got bored and wanted to do something, fight me.'},
                {name: 'Guides', value: '`geconomy`, `gcmds`'},
                {name: 'Shameless Promo', value: '`social` `donate`'},
                {name: 'Command List', value: 'use "`commands`"'},
                {name: 'Just Some Cookies Discord', value: 'This is the og Just Some Cookies, this was created as a passion project by War Cat Studios in the summer of 2021'},
                {name: 'Just Some Cookies Twitch', value: 'This is the Twitch version of Just Some Cookies, it is an all-purpose moderation bot with engagement tools bundled in.'},
                {name: 'Just Some Cookies Twitter', value: 'COMING SOON'},
                {name: 'Just Some Cookies Reddit', value: 'COMING SOON'},
                {name: 'Documentaion', value: 'use `cdocs`'},
                {name: 'Bots Code', value: '[Github](https://github.com/WarCatStudios/Just-Some-Cookies)'}

            )
            .setFooter('any text that has a dark box around is supposed to be a command')
    
            message.channel.send(newEmbed);
        }

        if (cmd === 'cdocs'){
            const cookieEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Just Some Cookies Documentaion')
            .setURL('https://www.patreon.com/warcat')
            .setDescription("commands for non-Discord Just Some Cookies bots")
            .setThumbnail('https://cdn.discordapp.com/avatars/778897544578596884/f712f817f7853bbbd908ded8242b1622.png?size=4096')
            .addFields(
                {name: 'COMING SOON', value: 'Documentation will be released with Just Some Cookies Twitch'}
            
            )
            .setFooter('hi, use `donate`')
    
            message.channel.send(cookieEmbed);
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
