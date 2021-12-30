const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'profile',
    aliases: [],
    permissions: [],
    description: 'oooh fancy shit',
    async execute(client, message, cmd, args, Discord, profileData){

                    //badge if statements n shit
                    if (profileData.cookies >= 1000 && profileData.oneK != 6){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    oneK: 6,
                                },
                            }
                        );     
                    }
                    if (profileData.cookies >= 10000 && profileData.tenK != 7){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    tenK: 7,
                                },
                            }
                        );     
                    }
                    if (profileData.cookies >= 100000 && profileData.hundK != 8){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    hundK: 8,
                                },
                            }
                        );     
                    }
                    if (profileData.cookies >= 1000000 && profileData.oneM != 9){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    oneM: 9,
                                },
                            }
                        );     
                    }
                    if (profileData.cookies >= 10000000 && profileData.tenM != 10){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    tenM: 10,
                                },
                            }
                        );     
                    }
                    if (profileData.cookies >= 100000000 && profileData.hundM != 11){
                        var response = await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    hundM: 11,
                                },
                            }
                        );     
                    }


        if (cmd === 'profile'){
            const member = client.emojis.cache.get("855980052868628530");
            const ownerB = client.emojis.cache.get("855973769942925342");
            var admin = "";
            var donator = "";
            var tester = "";
            var dev = "";
            var nyaw = "";
            var dabup = "";

            //economy progress badges
            var cookiee = client.emojis.cache.get("851712428617760778");
            var oneK = "";
            var tenK = "";
            var hundK = "";
            var oneM = "";
            var tenM = "";
            var hundM = "";

            if (profileData.oneK === 6){
                var oneK = client.emojis.cache.get("857124056871600148");
            }

            if (profileData.tenK === 7){
                var tenK = client.emojis.cache.get("857124155718369280");
            }

            if (profileData.hundK === 8){
                var hundK = client.emojis.cache.get("857124187495071745");
            }

            if (profileData.oneM === 9){
                var oneM = client.emojis.cache.get("857124215475535872");
            }

            if (profileData.tenM === 10){
                var tenM = client.emojis.cache.get("857124239584657418");
            }

            if (profileData.hundM === 11){
                var hundM = client.emojis.cache.get("857124269489913916");
            }

            //misc. badges

            if (profileData.admin === 1){
                var admin = client.emojis.cache.get("855980127569969192");
            }
            
            if (profileData.donator === 3){
                var donator = client.emojis.cache.get("855980164713152553");
            }
            
            if (profileData.nyaw === 5){
                var nyaw = client.emojis.cache.get("850278622178967552");    
            }
            
            if (profileData.dev === 4){
                var dev = client.emojis.cache.get("856002304058589194");
            }
            
            if (profileData.tester === 4){
                var tester = client.emojis.cache.get("856002378922721310");
            }

            if (profileData.dabmeup === 12){
                var dabup = client.emojis.cache.get("862924565151350805");
            }
            
            
            if (message.author.id === '663810564534829075'){
                const totalCook = profileData.bank + profileData.cookies;
                const embed = new Discord.MessageEmbed()
                    .setColor('#0097e6')
                    .setTitle(`${message.author.username}'s Profile`)
                    .setDescription(`${ownerB} ${admin} ${donator} ${member} ${nyaw} ${dabup} ${tester} ${dev}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n ${cookiee} ${oneK} ${tenK} ${hundK} ${oneM} ${tenM} ${hundM}`)
                    .addFields(
                        { name: 'Total Cookies', value: `${totalCook}` },
                        { name: 'Cookies In Wallet', value: `${profileData.cookies} Cookies` },
                        { name: 'Cookies In Bank', value: `${profileData.bank} Cookies` }
                    )
                    .setFooter(`What a swag owner, btw use +nyaw to get secret badge`)
                message.channel.send(embed);

            }
            else{
                const totalCook = profileData.bank + profileData.cookies;
                const ownerB = client.emojis.cache.get("855973769942925342");
                const embed = new Discord.MessageEmbed()
                    .setColor('#0097e6')
                    .setTitle(`${message.author.username}'s Profile`)
                    .setDescription(`${admin} ${donator} ${member} ${nyaw} ${dabup} ${tester} ${dev}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n ${cookiee} ${oneK} ${tenK} ${hundK} ${oneM} ${tenM} ${hundM}`)
                    .addFields(
                        { name: 'Total Cookies', value: `${totalCook}` },
                        { name: 'Cookies In Wallet', value: `${profileData.cookies} Cookies` },
                        { name: 'Cookies In Bank', value: `${profileData.bank} Cookies` },
                        { name: 'Total Boosts', value: 'bruh' }
                    )
                    .setFooter(`Economy profile put together by War Cat :)`)
                message.channel.send(embed);

            }
                



            
            
        }
    }


}