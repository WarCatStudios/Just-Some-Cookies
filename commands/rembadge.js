const profileModel = require("../models/profileSchema");
module.exports = {
  name: "rembadmin",
  aliases: ['rembdonate', 'rembtester', 'rembdev', 'rembnyaw'],
  permissions: [],
  description: "AAAAAAAAAAAAAAA NOT MY BADGES",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (cmd === 'rembadmin') {
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to take shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to take badge from??");
      console.log(target.username);

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.admin === 0) return message.channel.send(`this user doesn't have that badge`);

        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              admin: -1,
            },
          }
        );

        return message.channel.send(`${message.author.username} has taken a badge from ${target.username}`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'rembtester') {
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to take shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to take badge from??");
      console.log(target.username);

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.tester === 0) return message.channel.send(`this user doesn't have that badge`);

        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              tester: -4,
            },
          }
        );

        return message.channel.send(`${message.author.username} has taken a badge from ${target.username}`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'rembdev'){
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to take shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to take badge from??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.dev === 0) return message.channel.send(`this user doesn't have that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              dev: -4,
            },
          }
      );
  
        return message.channel.send(`${message.author.username} has taken a badge from ${target.username}`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'rembdonate'){
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to take shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to take badge from??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.donator === 0) return message.channel.send(`this user doesn't have that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              donator: -3,
            },
          }
      );
  
        return message.channel.send(`${message.author.username} has taken a badge from ${target.username}`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'rembnyaw'){
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an admin so stop trying to take shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to take badge from??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.nyaw === 0) return message.channel.send(`this user doesn't have that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              nyaw: -5,
            },
          }
      );
  
        return message.channel.send(`${message.author.username} has taken a badge from ${target.username}`);
      } catch (err) {
        console.log(err);
      }
    }
  }
};