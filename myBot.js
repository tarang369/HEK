const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('Connected as Mr.' + client.user.tag);
});

client.login('NzMwMzU5MzIxMDc4MTM2ODcz.XwWWhA.Tgq8BOTj3bPsCEsM2scvjixvHX4');
