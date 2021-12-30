module.exports = {
    name: 'balance',
    aliases: ['bal', 'profile'],
    permissions: [],
    description: 'check how many cookies ya got',
    execute(client, message, cmd, args, Discord, profileData){
        if (cmd === 'balance'){
            const embed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Cookie Balance')
            .addFields(
            {name: 'Wallet', value: `${profileData.cookies} Cookies`},
            {name: 'Bank', value: `${profileData.bank} Cookies`}
            )
            message.channel.send(embed);
        }

        if (cmd === 'bal'){
            const embed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Cookie Balance')
            .addFields(
            {name: 'Wallet', value: `${profileData.cookies} Cookies`},
            {name: 'Bank', value: `${profileData.bank} Cookies`}
            )
            message.channel.send(embed);
        }

    }
}