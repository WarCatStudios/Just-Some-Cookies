module.exports = {
    name: 'clear',
    aliases: ["clr"],
    permissions: ["MANAGE_MESSAGES"],
    description: "spam be gon",
    execute(client, message, cmd, args) {
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
        

    
}