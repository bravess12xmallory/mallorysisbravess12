const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "*";
client.on('ready', () => {
client.user.setStatus('idle');
console.log('I am ready!');
});

client.login(process.env.BOT_TOKEN);  //لا تغير هنااااااااااااااااا
//Test

