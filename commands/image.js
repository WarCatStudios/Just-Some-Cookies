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
        const image_query = args.join(' ');
        if (!image_query) return message.channel.send("What are you trying to search, if it's porn typing nothing ain't gonna get you there.");

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }

}