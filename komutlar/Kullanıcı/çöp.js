const Discord = require('discord.js');
const client = new Discord.Client();
const { Swiftcord } = require("swiftcord");
const cord = new Swiftcord();
exports.run = async (client, message, args) => {
let user;
if (message.mentions.users.first()) {
user = message.mentions.users.first();
} else {
user = message.author;
}
let c  = user.avatarURL({ format: 'png', dynamic: true, size: 1024 });
let image = await cord.trash(c)
const img = cord.write(image, "trash.png");
return message.channel.send(img);
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["trash"],
  permLevel: 0 
};

exports.help = {
  name: 'çöp', 
  description: 'gae',
  usage: 'çöp'
};