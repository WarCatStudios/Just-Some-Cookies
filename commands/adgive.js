const profileModel = require("../models/profileSchema");
module.exports = {
  name: "adgive",
  aliases: [],
  permissions: [],
  description: "money in da baaank",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (message.member.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to break the economy`);
    if (!args.length) return message.channel.send("actually ping someone retard");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("who are you trying to give money to dumbass?");
    console.log(amount);
    console.log(target.username);

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("no break bot plz");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doesn't have a currency account, they're missing out`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            cookies: amount,
          },
        }
      );

      return message.channel.send(`${message.author.username}, has generated **${amount} Cookies** and given it to ${target.username}`);
    } catch (err) {
      console.log(err);
    }
  },
};

