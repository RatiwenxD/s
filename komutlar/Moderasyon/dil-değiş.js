const Discord = require('discord.js'); 
const db = require("cheemsdb")

exports.run = async (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:x_:846821498567655435>  Ne yazık ki bu komutu kullanmaya yetkin yok");
   

if (!args[0]) {
  const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setDescription(`<:x_:846821498567655435> Dil Belirtiniz / Specify A Language | tr , en`)
.setTimestamp() 
message.channel.send(sj) 
}
if (args[0]==='tr') {
  const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setDescription(`<:tik:846821498839891968> Dil Türkçe Olarak Ayarlandı`)
.setTimestamp() 
db.set(`sunucu.${message.guild.id}.dil`,`TR`)

message.channel.send(sj) 
}
if (args[0]==='en') {
  const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setDescription(`<:tik:846821498839891968> Language Set to English`)
.setTimestamp() 
db.set(`sunucu.${message.guild.id}.dil`,`EN`)
message.channel.send(sj) 
}

  
 

}; 


module.exports.conf = {
  aliases: ["lang"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "dil-değiştir",
  description: "pat pat",
  usage: "dil-değiştir"
};