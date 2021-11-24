const Discord = require('discord.js')
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async(client, message, args) => {
const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

  
  
if (!dil) {
  if (!args[0]) {
   message.channel.send(`tag who you will marry with`)
 }
 if (args[0]) {
  const uwu = new Discord.MessageEmbed()
 .setDescription(`${message.author} Maried With ${args[0]} 💞`) 
 message.channel.send(uwu)
}
}

if (dil === 'TR') {
 if (!args[0]) {
   message.channel.send(`kiminle evlenceğini etiketle`)
 }
 if (args[0]) {
  const uwu = new Discord.MessageEmbed()
 .setDescription(`${message.author} Adlı Kişi ${args[0]} ile evlendi 💞`) 
 message.channel.send(uwu)
}
}
if (dil === 'EN') {
 if (!args[0]) {
   message.channel.send(`tag who you will marry with`)
 }
 if (args[0]) {
  const uwu = new Discord.MessageEmbed()
 .setDescription(`${message.author} Maried With ${args[0]} 💞`) 
 message.channel.send(uwu)
}
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["marry"],
  permLevel: 0
};
exports.help = {
  name: "evlen",
  description: "",
  usage: "evlen"
};