module.exports = {
    name: 'social',
    aliases: ['soc', 'donate', 'patreon'],
    permissions: [],
    description: "Shameless Promo",
    execute(client, message, cmd, args, Discord){

        if (cmd === 'social' || cmd === 'soc'){
            const socialEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('War Cat Studios Socials')
            .setURL('https://www.patreon.com/warcat')
            .setDescription("FOLLOW ALL OF THEM, GIVE ME CLOUT")
            .addFields(
                {name: 'Donation Link', value: '[Patreon](https://www.patreon.com/warcat)'},
                {name: 'All Socials', value: '[Linktree](https://linktr.ee/WarCatStudios)'},
                {name: 'Bot\'s Code', value: '[Github](https://github.com/WarCatStudios/Just-Some-Cookies)'},
                {name: 'Major Stuff', value: '[Youtube](https://tinyurl.com/t9kkeavc), [Twitch](https://tinyurl.com/zh7nkz9b), [Instagram](https://tinyurl.com/vdppp7uk), [Twitter](https://tinyurl.com/4wvjw7rr)'},
                {name: 'Minor Stuff', value: '[Itch.IO](https://war-cat-studios.itch.io/), [Game Bannana](https://gamebanana.com/members/1818326), [Soundcloud](https://soundcloud.com/warcatstudios)'}
            
            )
            .setFooter('lmao use +nyaw to get a secret badge')
    
            message.channel.send(socialEmbed);
        }

        if (cmd === 'donate' || cmd === 'patreon'){
            const donateEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Patreon')
            .setURL('https://www.patreon.com/warcat')
            .setDescription("Donate to support current and future projects! \n(I want money)")
            .setThumbnail('https://cdn.discordapp.com/avatars/216303189073461248/00a6db63b09480d1613877bf40e98bea.png?size=4096')
            .addFields(
                {name: 'Donation Link', value: '[Patreon](https://www.patreon.com/warcat)'}
            
            )
            .setFooter('all donations are greatly appreciated')
    
            message.channel.send(donateEmbed);
        }    
    }
}