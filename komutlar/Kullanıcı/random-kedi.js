const Discord = require('discord.js');
const meow = require("random-meow");
exports.run = async (client, message, args) => {

meow().then(url => message.channel.send(url)).catch(console.error);
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["rc","randomcat"],
  permLevel: 0 
};

exports.help = {
  name: 'randomkedi', 
  description: 'soru sorar',
  usage: 'randomkedi'
};