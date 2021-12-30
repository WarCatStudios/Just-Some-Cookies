const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'dabup',
    aliases: [],
    permissions: [],
    description: "ay brother, dab me up",
    async execute(client, message, cmd, args, Discord, profileData) {
        var DMUrightFace = client.emojis.cache.get("862924547275227156");
        var DMUrightHand = client.emojis.cache.get("862924581106745414");

        var DMUleftFace = client.emojis.cache.get("862924565151350805");

        var handHoldOne = client.emojis.cache.get("863443129586548736");
        var handHoldTwo = client.emojis.cache.get("863443161161662494");

        var kissOne = client.emojis.cache.get("863443052067946527");
        var kissTwo = client.emojis.cache.get("863443088268853258");

        var gun = client.emojis.cache.get("865835452266709022");
        var ded = client.emojis.cache.get("865838703460614144");




        let filter = m => m.author.id === message.author.id
        message.channel.send(`${DMUrightFace} ${DMUrightHand}`).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            })
                .then(async message => {
                    message = message.first()
                    if (message.content == '<:dabmeup1hand:862924596399702027> <:dabmeupl:862924565151350805>') {

                        const randomNumber = Math.floor(Math.random() * 3) + 1;

                        if (randomNumber === 1) {
                            message.channel.send(`${handHoldOne}${handHoldTwo}`);
                            message.channel.send(`${kissOne}${kissTwo}`)

                            return message.channel.send('CONGRATS YOU GOT THE GAY ENDING');
                        }

                        if (randomNumber === 2) {
                            message.channel.send(`${DMUleftFace}${gun}${ded}`);

                            return message.channel.send(`you got the bad ending :(`);
                        }

                        if (randomNumber === 3) {
                            message.channel.send(`${DMUleftFace}🤝${DMUrightFace}`)
                        }

                        message.channel.send('CONGRATS YOU GOT THE GOOD ENDING');

                        if (profileData.dabmeup != 12) {
                            var responsse = await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        dabmeup: 12,
                                    },
                                }
                            );
                        }
                        else{
                            return;
                        }


                    } else {
                        message.channel.send(`bruh`)
                    }
                })
                .catch(collected => {
                    message.channel.send('left me hanging... really');
                });
        })
    }
}