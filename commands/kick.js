module.exports = {
    name: 'kick',
    aliases: [],
    permission: ['KICK_MEMBERS'],
    description: "bye bye bitch",
    execute(client, message, cmd, args){
        const member = message.mentions.users.first();

        if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')){
            return message.channel.send('no, only people who have perms can do this. (kick_members)');
        }
    
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been thrown into a pool of angry Dream stans.`);
        }
        else{
            message.channel.send('Who are you trying to kick, retard?');
        }
            
            
            
            
                
            
        
        

    }
}