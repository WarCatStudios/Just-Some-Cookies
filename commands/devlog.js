module.exports = {
    name: 'devlog',
    aliases: ['changes', 'changelog', 'version', 'changes', 'techlog'],
    permissions: [],
    description: 'oooh fancy shit',
    execute(client, message, cmd, args, Discord, profileData) {

        if (cmd === 'techlog') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle(`Version 1.6 Technical Updates`)
                .setDescription(`**Bug Fixes and Testing** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nA deep dive on how I did shit!!!`)
                .addFields(
                    { name: 'Crash Prevention', value: `.Made the bot react when an argument wasn't defined in the meme and spam command` },
                    { name: 'Updating MongoDB', value: `I added the dabup badge to the database so I could test for the plans for inventories` },
                    { name: 'bug fixes', value: `.I moved nyaw out of the if statement which made sure you were admin first\n.The badges update at the beginning of the profile command so badges update on time` },
                )
                .setFooter(`I entirely and whole-heartedly intentionally dislike varible storing and processing`)
            message.channel.send(embed);
        }
        else {
            const embed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle(`Version 1.6`)
                .setDescription(`**Bug Fixes and Testing** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nthis is a minor update to explore and implement new systems for a major update coming soon, also to fix poorly put together systems`)
                .addFields(
                    { name: 'Crash Prevention', value: `patch many ways to crash the bot` },
                    { name: 'techlog updates', value: 'a more in depth version of this command, use `techlog`'},
                    { name: 'dabup command', value: `it's just a joke but you can get a badge!` },
                    { name: 'textgen command', value: `just some pre generated text` },
                    { name: 'spam easter eggs', value: 'make the content of the spam command "bunger_eat" and you get a suprise' },
                    { name: 'debug for spam', value: 'If you follow the number of messages with "debug" on the spam command it will tell you when the command is done' },
                    { name: 'meme command versatility', value: 'added more memes to the meme command' },
                    { name: 'updated guides', value: `added dabup to badge guide` },
                    { name: 'BUG FIXES', value: `\n. Fixed the nyaw command being only acessible to admins\n.Badges now update on time` }
                )
                .setFooter(`I FUCKING HATE DATA MANAGEMENT AAAAAAAAAAAAAAAA`)
            message.channel.send(embed);
        }


    }
}