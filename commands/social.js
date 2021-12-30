module.exports = {
    name: 'social',
    aliases: ['soc'],
    permissions: [],
    description: "Shameless Promo",
    execute(client, message, cmd, args, Discord){
        const socialEmbed = new Discord.MessageEmbed()
        .setColor('#0097e6')
        .setTitle('War Cat Studios Socials')
        .setDescription("FOLLOW ALL OF THEM, GIVE ME CLOUT")
        .addFields(
            {name: 'Major Stuff', value: '[Youtube](https://tinyurl.com/t9kkeavc), [Twitch](https://tinyurl.com/zh7nkz9b), [Instagram](https://tinyurl.com/vdppp7uk), [Twitter](https://tinyurl.com/4wvjw7rr)'},
            {name: 'Minor Stuff', value: '[Itch.IO](https://war-cat-studios.itch.io/), [Game Bannana](https://gamebanana.com/members/1818326), [Soundcloud](https://soundcloud.com/warcatstudios)'}
        
        )
        .setFooter('lmao use +nyaw to get a secret badge')

        message.channel.send(socialEmbed);
    }
}