const profileModel = require("../models/profileSchema");
module.exports = {
  name: "addbadmin",
  aliases: ['addbdonate', 'addbtester', 'addbdev', 'addbnyaw', 'nyaw', 'adgbadge', 'adreset'],
  permissions: [],
  description: "money in da baaank",
  async execute(client, message, cmd, args, Discord, profileData) {

    if (cmd === 'nyaw'){
      const target = message.author.id;
  
      try {
        const targetData = await profileModel.findOne({ userID: target });
        if (!targetData) return message.channel.send(`bruh, the first message you send in any discord server with this bot in it is literally the secret command, bullshit`);

        if (targetData.nyaw === 5) return message.channel.send(`bro you already got the stupid badge, go away`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target,
          },
          {
            $inc: {
              nyaw: 5,
            },
          }
      );
  
        return message.channel.send(`NYAW OMG NYAW FUNNI FNF REFERENCE JFKSDFKFJHSFIJHS`);
      } catch (err) {
        console.log(err);
      }
    }

    if (profileData.admin != 1) return message.channel.send(`your not an admin so stop trying to give people shit...`);

    if (cmd === 'addbadmin') {
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an owner so stop trying to give people shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.admin === 1) return message.channel.send(`this user already has admin`);

        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              admin: 1,
            },
          }
        );

        return message.channel.send(`${message.author.username}, has given ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'addbtester') {
      
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.tester === 4) return message.channel.send(`this user already has that badge`);

        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              tester: 4,
            },
          }
        );

        return message.channel.send(`${message.author.username}, has given ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'addbdev'){
      
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.dev === 4) return message.channel.send(`this user already has that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              dev: 4,
            },
          }
      );
  
        return message.channel.send(`${message.author.username}, has given ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'addbdonate'){
      if (message.author.id != "663810564534829075") return message.channel.send(`your not an owner so stop trying to give people shit...`);
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.donator === 3) return message.channel.send(`this user already has that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              donator: 3,
            },
          }
      );
  
        return message.channel.send(`${message.author.username}, has given ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'addbnyaw'){
      
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);

        if (targetData.nyaw === 5) return message.channel.send(`this user already has that badge`);
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              nyaw: 5,
            },
          }
      );
  
        return message.channel.send(`${message.author.username}, has given ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

    if (cmd === 'adreset'){
      const target = message.mentions.users.first();
      if (!target) return message.channel.send("who are you trying to give badge to??");
      console.log(target.username);
  
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`This user doens't have a currency account, they're missing out`);
        
        if (targetData.admin === 0 || targetData.tester === 0) return message.channel.send('LMAO RIP ')
        
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              tester: -4,
              admin: -1,
            },
          }
      );
  
        return message.channel.send(`${message.author.username}, has taken ${target.username} a new badge`);
      } catch (err) {
        console.log(err);
      }
    }

  }
};

