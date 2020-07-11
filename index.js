const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('Connected as Mr.' + client.user.tag);
});

client.login('NzMwMzU5MzIxMDc4MTM2ODcz.XwmjJw.SP4gDSwqaQ7v9Q66MFsEhvta8Ao');
