const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
client.login(token);
client.on('ready', () => {
  console.log('Connected as Mr.' + client.user.tag);
  console.log(
    '========================' + Math.random() + '========================'
  );
});

const isValidCommand = (message, cmdName) =>
  message.content.toLowerCase().startsWith(prefix + cmdName);
const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Match Reminder')
  .setAuthor(
    'Some name',
    'https://i.imgur.com/wSTFkRM.png',
    'https://discord.js.org'
  )
  .setDescription(`Match Reminder`);
// .setThumbnail('https://i.imgur.com/wSTFkRM.png')
// .addFields(
// { name: 'Regular field title', value: 'Some value here' },
// { name: '\u200B', value: '\u200B' },
// { name: 'Inline field title', value: 'Some value here', inline: true },
// { name: 'Inline field title', value: 'Some value here', inline: true }
// )
// .addField('Inline field stitle', 'Some value here', true);
// .setImage('https://i.imgur.com/wSTFkRM.png')
// .setTimestamp()
// .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
client.on('message', (message) => {
  if (message.author.bot) return;

  if (isValidCommand(message, 'match')) {
    let roleId1 = message.content.substring(7);
    console.log(roleId1);
    // message.guild.roles.cache
    //   .find((role) => role.id == roleId1)
    //   .members.each((member) => {
    // const example2Embed = new Discord.MessageEmbed()
    //   .setColor('#FF0000')
    //   .setTitle(`Match Reminder for Teams !!!`)
    //   .setAuthor(
    //     'HEK Community Bot',
    //     'https://i.imgur.com/wSTFkRM.png',
    //     'https://discord.js.org'
    //   )
    //   .setDescription(`Match Reminder <@&${roleId1}>`);
    // message.channel.send(example2Embed);
    // member.send(example2Embed);
    // console.log(member);
    // });
  }
});
