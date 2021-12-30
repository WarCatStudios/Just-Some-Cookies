const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  cooldown: 3,
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("stop trying to break the bot, this is why we can\'t have nice things");
    try {
      if (amount > profileData.cookies) return message.channel.send(`I can\'t create currency out of thin air, this isn\'t Zimbaewe dumbass`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            cookies: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`${message.author.username}, You deposited ${amount} of coins into your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};



