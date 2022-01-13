module.exports = {
    name: 'devlog',
    aliases: ['changes', 'changelog', 'version', 'changes', 'techlog'],
    permissions: [],
    description: 'oooh fancy shit',
    execute(client, message, cmd, args, Discord, profileData) {

        if (cmd === 'techlog') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle(`Version 1.6.5 Technical Updates`)
                .setDescription(`**Bug Fixes** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nA deep dive on how I did shit!!!`)
                .addFields(
                    { name: 'bug fixes', value: `.spam command now works\n.image command now works`},
                )
                .setFooter(`I entirely and whole-heartedly intentionally dislike varible storing and processing`)
            message.channel.send(embed);
        }
        else {
            const embed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle(`Version 1.6.5`)
                .setDescription(`**Social Management** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nthis is a minor update to explore and implement new systems for a major update coming soon, also to fix poorly put together systems`)
                .addFields(
                    { name: 'Updated commands', value: `info, social, spam, image` },
                    { name: 'bot now on github', value: 'checks socials or help to get link'},
                    { name: 'donate command', value: `pls donate (i want money)` },
                    { name: 'image command back', value: `yessir it works again` },
                    { name: 'cdocs', value: `cookies documentation` }
                )
                .setFooter(`I FUCKING HATE DATA MANAGEMENT AAAAAAAAAAAAAAAA`)
            message.channel.send(embed);
        }


    }
}