module.exports = {
    name: 'guide',
    aliases: ['geconomy', 'gcmds', 'gadcmds', 'gbadge', 'gbadgee', 'greact', 'guides'],
    permissions: [],
    description: "GUIDES GUIDES GUIDES",
    execute(client, message, cmd, args, Discord) {
        if (cmd === 'guide' || cmd === 'guides') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Guides')
                .setDescription("Guides for Just Some Cookies")
                .addFields(
                    { name: '`geconomy`', value: 'guide on how to get currency in the economy system' },
                    { name: '`gcmds`', value: 'guide on the more in-depth commands' },
                    { name: '`gadcmds`', value: 'for admin commands that you probably can\'t use' },
                    { name: '`gbadge`', value: 'guide for the various player badges' },
                    { name: '`greact`', value: 'Every way to trigger the bot into reacting to your message!'}
                )
                .setFooter('For using this command you got a badge ;)')
            message.channel.send(embed);
        }

        if (cmd === 'geconomy') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Cookie Economy')
                .setDescription("Teaching you how tf the economy works")
                .addFields(
                    { name: 'Basics', value: 'The Cookie economy is a game part of this bot, the main currency is Cookies($C)' },
                    { name: 'Generating Money', value: 'Use `beg` to get any amount of money between 1-500 cookies\nOnce you have 25k you can use `work`' },
                    { name: 'Your Bank', value: 'Use `deposit` follwed by a number to put cookies into your bank, use `withdraw` followed by a number to remove cookies from your bank' }

                )
                .setFooter('any text that has a dark box around is supposed to be a command')

            message.channel.send(newEmbed);
        }

        if (cmd === 'gcmds') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Annoying Commands')
                .setDescription("some commands aren't very clear on how to use them so this exists")
                .addFields(
                    { name: 'mcserver command', value: 'Command in use: "+mcserver server.ip (25565 for java, 19132 for bedrock)' },
                    { name: 'Spam Command', value: 'Command in use: "+spam CONTENT [Number of times you want CONTENT to be sent]"\n if you make content "salad_tf2" or "bunger_eat" you\'ll get a suprise'},
                    { name: 'Meme Command', value: 'Command in use: "+meme (NOT REQUIRED: tf2)"'}
                )
                .setFooter('any text that has a dark box around is supposed to be a command')

            message.channel.send(newEmbed);
        }

        if (cmd === 'gbadge') {

            const member = client.emojis.cache.get("855980052868628530");
            const ownerB = client.emojis.cache.get("855973769942925342");
            var admin = client.emojis.cache.get("855980127569969192");
            var donator = client.emojis.cache.get("855980164713152553");
            var tester = client.emojis.cache.get("856002378922721310");
            var dev = client.emojis.cache.get("856002304058589194");
            var nyaw = client.emojis.cache.get("850278622178967552");
            var dabup = client.emojis.cache.get("862924565151350805");

            const badgeG = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle(`Badge Guide`)
                .setDescription(``)
                .addFields(
                    { name: `Owner ${ownerB} `, value: `This is for the owner War Cat Studios.` },
                    { name: `Admin ${admin} `, value: `This badge is for people who are really trusted` },
                    { name: `Donator ${donator} `, value: `This badge is for people who donate to War Cat's patreon.  Which doesn't exist...` },
                    { name: `Tester ${tester} `, value: `This is for people in War Cat's test server :)` },
                    { name: `Developer ${dev} `, value: `This is for people worked with War Cat to improve this bot` },
                    { name: `nyaw ${nyaw} `, value: `NYAW from friday night funkin vs Kapi` },
                    { name: `Dabbed Up ${dabup}`, value: 'you got the good ending ;)'}
                )
                .setFooter(`use \`gbadgee\` for economy badges`)
            message.channel.send(badgeG);

        }

        if (cmd === 'gbadgee') {

            const cookiee = client.emojis.cache.get("851712428617760778");
            var oneK = client.emojis.cache.get("857124056871600148");
            var tenK = client.emojis.cache.get("857124155718369280");
            var hundK = client.emojis.cache.get("857124187495071745");
            var oneM = client.emojis.cache.get("857124215475535872");
            var tenM = client.emojis.cache.get("857124239584657418");
            var hundM = client.emojis.cache.get("857124269489913916");

            const badgeG = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Economy Badge Guide')
                .setDescription('')
                .addFields(
                    { name: `Cookie ${cookiee} `, value: `Obtained for having an economy profile` },
                    { name: `1k ${oneK} `, value: `Obtained for reaching 1 Thousand Cookies` },
                    { name: `10k ${tenK} `, value: `Obtained for reaching 10 Thousand Cookies` },
                    { name: `100k ${hundK} `, value: `Obtained for reaching 100 Thousand Cookies` },
                    { name: `1M ${oneM} `, value: `Obtained for reaching 1 Mil. Cookies` },
                    { name: `10M ${tenM} `, value: `Obtained for reaching 10 Mil. Cookies` },
                    { name: `100M ${hundM}`, value: `Obtained for reaching 100 Mil. Cookies` }
                )
                .setFooter('sexy badges if you ask me')
            message.channel.send(badgeG)
        }

        if (cmd === 'greact') {
            var mspaintwindy = client.emojis.cache.get('779522243004071946');

            const badgeG = new Discord.MessageEmbed()
                .setColor('#0097e6')
                .setTitle('Reaction Trigger Guide')
                .setDescription('')
                .addFields(
                    { name: `MSPaintWindy reaction ${mspaintwindy}`, value: `Any message containing the emoji ${mspaintwindy}` },
                    { name: `garlic bread`, value: `Any varient of garlic bread gets 🧄 and then 🍞 reacted to it` },
                    { name: `announcements`, value: `certain annoucement channels get ${mspaintwindy} reacted to it` },
                    { name: `cookies`, value: `any message with any varient of cookies gets reacted to with 🍪` },
                )
                .setFooter('sexy badges if you ask me')
            message.channel.send(badgeG)
        }
    }
}