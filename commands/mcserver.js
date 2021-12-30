const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    aliases: ['mserver', 'mc', 'minecraft'],
    cooldown: 3,
    permissions: [],
    description: 'get information about a minecraft server',
    execute(client, message, cmd, args, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip, I AM NOT TELEPATHIC');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port, try using port 25565 for Java and 19132 for Bedrock');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#0097e6')
            .setTitle('Minecraft Server Status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Mc server util put together by War Cat Studios');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            return;
            
        })
    }
}