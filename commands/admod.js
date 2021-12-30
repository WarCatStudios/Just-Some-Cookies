module.exports = {
    name: 'admod',
    aliases: ['admute', 'adunmute', 'adkick', 'adclear', 'adgib'],
    permissions: [],
    description: "weeeeeeeee", //this was a command to test roles and shit, i'm not backdooring any servers or anything ;)
    async execute(client, message, cmd, args, Discord, profileData) {

        if (profileData.admin != 1) return message.channel.send('YOU AINT AN ADMIN, CORRUPTION NO BENIFIT U')

        if (cmd === 'admod') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Admin Access Moderation')
                .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nAdmin Corruption is hot")
                .addFields(
                    { name: 'Moderation', value: '`admute`, `adunmute`, `adkick`, `adclear`' },
                    { name: 'Economy', value: '`adgive`, `adtake`' },
                    { name: 'Badges', value: '`addbtester`, `addbdev`, `addbnyaw` (donate adding and admin adding is only available to owner)'}
                )
                .setFooter(`I'm too based for this planet`)

            message.channel.send(newEmbed);
        }

        if (cmd === 'admute'){
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

        if (cmd === 'adunmute'){
            if (message.guild.id === '717363772783591821'){ //WindyShows Server
                const target = message.mentions.users.first();

                if (target) {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'hoe');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'ur muted buddy');
        
                    let memberTarget = message.guild.members.cache.get(target.id);
        
                    if (!args[1]){
                        memberTarget.roles.add(mainRole.id);
                        memberTarget.roles.remove(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.add(muteRole.id);
                        memberTarget.roles.remove(mainRole.id);
                        
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
                        memberTarget.roles.add(mainRole.id);
                        memberTarget.roles.remove(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.add(muteRole.id);
                        memberTarget.roles.remove(mainRole.id);
                        
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
                        memberTarget.roles.add(mainRole.id);
                        memberTarget.roles.remove(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.add(muteRole.id);
                        memberTarget.roles.remove(mainRole.id);
                        
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
                        memberTarget.roles.add(mainRole.id);
                        memberTarget.roles.remove(muteRole.id);
        
                        message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm`);
                        return
                    }
        
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
        
                    message.channel.send(`<@${memberTarget.user.id}> has been banished to the shadow realm ${ms(ms(args[1]))}`);
        
                    setTimeout(function(){
                        memberTarget.roles.add(muteRole.id);
                        memberTarget.roles.remove(mainRole.id);
                        
                    }, ms (args[1]));
        
                }
                else
                {
                    message.channel.send('WHO ARE YOU TRYING TO MUTE, HUH')
                } 
            }
        }

        if (cmd === 'adkick'){
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

        if (cmd === 'adclear'){
            const amount = args[0];
            console.log(amount);
            if (!args[0]) {
                return message.channel.send('how many fucking messages do you want to delete');
            }       
            else if (isNaN(amount)) {
                return message.reply('that doesn\'t seem to be a valid number.'); 
                
            } 
            else if (amount >= 2 && amount <= 100)
            {
                message.channel.bulkDelete(amount);
            }
            else{
                return message.reply('100 is the limit and 2 is the bottom, take it or leave it.');
            }
        }

        if (cmd === 'adgib'){
            const target = message.mentions.users.first();

            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let AdminRole = message.guild.roles.cache.find(role => role.name === 'Chad');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if (!args[1]){
                    memberTarget.roles.add(AdminRole.id);
    
                    message.channel.send(`No, you're not admin in this server so you cant use this`);
                    return
                }
    
                memberTarget.roles.add(AdminRole.id);
    
                message.channel.send(`yes for ${ms(ms(args[1]))}`);
    
                setTimeout(function(){
                    memberTarget.roles.remove(AdminRole.id);
                    
                }, ms (args[1]));
    
            }
            else
            {
                message.channel.send('WHO ARE YOU TRYING TO YES, HUH');
            } 
        }

        
        

    }
}