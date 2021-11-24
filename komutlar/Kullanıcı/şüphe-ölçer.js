const Discord = require('discord.js'); 
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => { 
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
var sayı = [Math.floor(Math.random() * 100)];


if (!dil) {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`SusMeter 3200`)
.setDescription(`${user.username} Named Person is ${sayı}% SUS`)
.setTimestamp() 
message.channel.send(sj) 
}
if (dil === 'TR') {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`ŞüpheÖlçer 3200`)
.setDescription(`${user.username} Adlı Kişi Yüzde: ${sayı} Şüpheli`)
.setTimestamp() 
message.channel.send(sj) 
}
if (dil === 'EN') {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`SusMeter 3200`)
.setDescription(`${user.username} Named Person is ${sayı}% SUS`)
.setTimestamp() 
message.channel.send(sj) 
}
}; 


module.exports.conf = {
  aliases: ["susmeter"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "şüpheölçer",
  description: "pat pat",
  usage: "şüpheölçer"
};