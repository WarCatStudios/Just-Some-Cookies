const profileModel = require('../../models/profileSchema');
module.exports = async(Discord, client, GuildMember, member) =>{

   
    if (GuildMember.guild.id === '860417187445473331'){
        let welcomeRole = GuildMember.guild.roles.cache.find(role => role.name === 'Dweller');

        GuildMember.roles.add(welcomeRole);
        GuildMember.guild.channels.cache.get('861119693744898069').send(`welcome <@${GuildMember.user.id}>, to the attic!`); 
           
    }

    if (GuildMember.guild.id === '838661551203942442'){
        let welcomeRole = GuildMember.guild.roles.cache.find(role => role.name === 'Member');

        GuildMember.roles.add(welcomeRole);
        GuildMember.guild.channels.cache.get('849370802075205692').send(`welcome <@${GuildMember.user.id}>, to the server! Go to rules and especially the drip car collection.`);
    }
    
}