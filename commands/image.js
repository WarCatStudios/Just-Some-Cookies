var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: false,
    },
});
module.exports = {
    name: 'image',
    aliases: ['png', 'img'],
    permissions: [],
    description: 'images yaaay',
    async execute(client, message, cmd, args){
        if (message.author.id != "663810564534829075") return message.channel.send('this command is in lockdown because it DOESNT FUCKING WORK ON MY RASPBERRY PI LKJBSLKJFBSLFJB');
        const image_query = args.join(' ');
        if (!image_query) return message.channel.send("What are you trying to search, if it's porn typing nothing ain't gonna get you there.");

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }

}