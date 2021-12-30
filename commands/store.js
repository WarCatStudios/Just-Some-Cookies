module.exports = {
    name: 'store',
    aliases: ['buy', 'shop', 'inv'],
    permissions: [],
    description: "EMBEDS BABYYYY",
    execute(client, message, cmd, args, Discord, profileData){
        const shopEmbed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Boost Store')
            .setDescription("A robust shopping system to purchase boosts")
            .addFields(
                { name: 'Briefcase', value: '**$25,000**\nAllows to use "+work" to get money.' },
                { name: 'Raspberry Badge', value: '**$100,000**\nEach badge gives and 2x boost, adds a badge to profile' },
                { name: 'MSPaint Windy', value: '**$500,000**\nAllows to use "+gamble" to get money' },
                { name: 'Mute\'s Boots', value: '**$1,000,000**\nGives a 2x boost to production' }
            )
            .setFooter('use `cosstore` to open the cosmetic shop')
        message.channel.send(shopEmbed);
    }
}