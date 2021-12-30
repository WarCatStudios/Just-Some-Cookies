const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'mongoup',
    aliases: [],
    permissions: [],
    description: "plz update my Mongo",
    async execute(client, message, cmd, args, Discord, profileData) {

        if (message.author.id != '663810564534829075') return message.channel.send('NO ONLY I CAN DO DATA MANAGEMENT');
        
        profileModel.updateMany(
            { workcase: { $exists: false } }, // the $exists operator checks if a field exists
            { $set: { workcase: 0 } } // the $set operator will set a field without modifying the rest of the document
        );

        message.channel.send(`${profileData.workcase}`);
    }

}