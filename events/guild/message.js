require('dotenv').config();

const cooldowns = new Map();

const profileModel = require('../../models/profileSchema');
module.exports = async (Discord, client, message) => {

    const prefix = process.env.PREFIX;

    var mspaintwindy = '779522243004071946';

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
                sent: 0,
                received: 0
            });
        }
    } catch (err) {
        console.log(err);
    }

    function emoji(id) {
        return client.emojis.get(id).toString();
    }

    if (message.channel.id === "729791092157054997") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'mspaintwindy');
        message.react(reactionEmoji);
    }
    else if (message.channel.name.includes("welcome")) {
        message.react('👋');
    }
    else if (message.content.includes("garlic bread")) {
        message.react('🧄');
        message.react('🍞');
    }
    else if (message.content.includes('bread garlic')) {
        message.react('🍞');
        message.react('🧄');
    }
    else if (message.content.includes("bread")) {
        message.react('🍞');
    }
    else if (message.content.includes("garlic")) {
        message.react('🧄');
    }
    else if (message.channel.id === "826551602814124084") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'mspaintwindy');
        message.react(reactionEmoji);
    }
    else if (message.content.includes('779522243004071946')) {
        message.react(mspaintwindy);
    }
    else if (message.content.includes('cookie') || message.content.includes('cookies')) {

        message.react('🍪');
        message.react(`850278593762164775`);
        message.react(`851712428617760778`);
    }




    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return;

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    else {
        //do nothing
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)) {
        const experation_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < experation_time) {
            const time_left = (experation_time - current_time) / 1000;

            return message.reply(`wait ${time_left.toFixed(1)} more seconds, it really isn't that long`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


    //executes command
    try {
        command.execute(client, message, cmd, args, Discord, profileData);
        return;
    } catch (err) {
        console.log(err);
    }



}