const Discord = require('discord.js');
const client = new Discord.Client();
const { Swiftcord } = require("swiftcord");
const cord = new Swiftcord();
exports.run = async (client, message, args) => {
if (!message.mentions.users.first()) return message.channel.send("birini etiketle")
let k  = message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 1024 });
let c  = message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 });
let image = await cord.kiss(c, k)
const img = cord.write(image, "kiss.png");
return message.channel.send(img);
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["öp"],
  permLevel: 0 
};

exports.help = {
  name: 'kiss', 
  description: 'uWu',
  usage: 'kiss'
};