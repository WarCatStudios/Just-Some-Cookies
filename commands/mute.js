const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: [],
    permissions: ['MUTE_MEMBERS'],
    description: "silence asshat",
    execute(client, message, cmd, args){
        const target = message.mentions.users.first();

        if (target) {
            if (message.guild.id === '717363772783591821'){ //WindyShows Server
                const target = message.mentions.users.first();

                if (target) {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'hoe');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'ur muted buddy');
        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]){
                        memberTarget.roles.remove(mainRole.id);
                        memberTarget.roles.add(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        
                    }, ms (args[1]));
        
                }
                else
                {
                    message.channel.send('WHO ARE YOU TRYING TO MUTE, HUH')
                }
            }

            if (message.guild.id === '795437944570642472'){ //Test Server
                const target = message.mentions.users.first();

                if (target) {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'muteee');
        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]){
                        memberTarget.roles.remove(mainRole.id);
                        memberTarget.roles.add(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        
                    }, ms (args[1]));
        
                }
                else
                {
                    message.channel.send('WHO ARE YOU TRYING TO MUTE, HUH')
                }
            }

            if (message.guild.id === '717904736833241088'){ //War Cat Server
                const target = message.mentions.users.first();

                if (target) {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'In the Shadow Realm');
        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]){
                        memberTarget.roles.remove(mainRole.id);
                        memberTarget.roles.add(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        
                    }, ms (args[1]));
        
                }
                else
                {
                    message.channel.send('WHO ARE YOU TRYING TO MUTE, HUH')
                }
            }

            if (message.guild.id === '860417187445473331'){ //The attic
                const target = message.mentions.users.first();

                if (target) {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'Dweller');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'In the shadow realm');
        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]){
                        memberTarget.roles.remove(mainRole.id);
                        memberTarget.roles.add(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        
                    }, ms (args[1]));
        
                }
                else
                {
                    message.channel.send('WHO ARE YOU TRYING TO MUTE, HUH')
                } 
            }
        }
    }
}