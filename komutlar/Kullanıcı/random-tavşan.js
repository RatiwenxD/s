const Discord = require('discord.js');
const bunny = require('bunny-img');
exports.run = async (client, message, args) => {
message.channel.send(bunny.getBunnyIMG())

}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["rb","random-bunny","random-tavşan"],
  permLevel: 0 
};

exports.help = {
  name: 'randombunny', 
  description: '',
  usage: 'random-bunny'
};