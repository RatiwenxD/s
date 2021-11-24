const Discord = require('discord.js')
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async(client, message, args) => {
var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

  
  
if (!dil) {
  const uwu = new Discord.MessageEmbed()
.setTitle('İnvite Cheems To Your Server')
.addField('__**invite**__','**[Invıte](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=134310980&scope=bot)**',true)
.addField('__**Vote**__','**[vote](https://top.gg/bot/876965300619313165/vote)**',true)
 message.channel.send(uwu)
}
if (dil === 'TR') {
  const uwu = new Discord.MessageEmbed()
.setTitle('Cheems Botu Kendi Sunucuna Davet Et')
.addField('__**Botu davet et**__','**[Invıte](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=134310980&scope=bot)**',true)
.addField('__**oy**__','**[oy](https://top.gg/bot/876965300619313165/vote)**',true)
 message.channel.send(uwu)
}
if (dil === 'EN') {
  const uwu = new Discord.MessageEmbed()
.setTitle('İnvite Cheems To Your Server')
.addField('__**invite**__','**[Invıte](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=134310980&scope=bot)**',true)
.addField('__**Vote**__','**[vote](https://top.gg/bot/876965300619313165/vote)**',true)
 message.channel.send(uwu)
}

  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};
exports.help = {
  name: "davet",
  description: "",
  usage: "davet"
};