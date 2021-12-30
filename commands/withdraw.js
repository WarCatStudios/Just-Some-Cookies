const profileModel = require("../models/profileSchema");
module.exports = {
    name: "withdraw",
    aliases: ['with', 'wit'],
    cooldown: 3,
    permissions: [],
    description: "money not in bannk",
    async execute(client, message, cmd, args, Discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send('no trying to break the bot or adding zero to your balance asshat');
        try{
            if(amount > profileData.bank) return message.channel.send('I can\'t create currency out of thin air, this isn\'t Zimbabwe dumbass.')
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    cookies: amount,
                    bank: -amount,
                },
            }
        );
        return message.channel.send(`${message.author.username}, you withdrew **${amount} Cookies** from your bank.`)
        }catch (err){
            console.log(err);
        }
    }
}