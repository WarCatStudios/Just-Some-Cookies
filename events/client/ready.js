module.exports = (Discord, client) =>{
    console.log('Cookies is online, what shit are you doing now?');
    console.log('Version 1.6');
    client.user.setPresence({
        status: "", //dnd, idle, invisible
        activity: {
          name: "+help V1.6",
          type: "PLAYING", //PLAYING, WATCHING, LISTENING
        },
    });
}