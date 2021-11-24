const Discord = require('discord.js');

const cevaplartr = [
    "evemt",
    "hamyır",
    "bemlki",
    "olabimlir",
    "daha sonra sor",
    "imkansız",
    "bemi zekimi sanıyosun",
    "hiç olmayabilimr",
    "hiç cevapmlamıyım"
];
const cevaplaren = [
    "yes",
    "no",
    "maybe",
    "ask later",
    "No Chance"
];
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => {
  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
  if (!dil) {
var soru = args.join(' ');
var cevap = cevaplaren[Math.floor(Math.random() * cevaplaren.length)];
if(!soru) return message.reply('<a:y_:822873594312654900> ask a question')
const uwu = new Discord.MessageEmbed()
.setTitle('Ask Cheems')
.setDescription(`
**You Asked:** ${soru}
**My answer:** ${cevap}
`)
.setFooter('Cheems Bot')
message.channel.send(uwu)
}
    
if (dil === 'TR') {
var soru = args.join(' ');
var cevap = cevaplartr[Math.floor(Math.random() * cevaplartr.length)];
if(!soru) return message.reply('<a:y_:822873594312654900> Sorunu Belirt.')
const uwu = new Discord.MessageEmbed()
.setTitle('Cheemse Sor')
.setDescription(`
**Sorun:** ${soru}
**Cevabım:** ${cevap}
`)
.setFooter('Cheems Bot')
message.channel.send(uwu)
}
    
if (dil === 'EN') {
var soru = args.join(' ');
var cevap = cevaplaren[Math.floor(Math.random() * cevaplaren.length)];
if(!soru) return message.reply('<a:y_:822873594312654900> ask a question')
const uwu = new Discord.MessageEmbed()
.setTitle('Ask Cheems')
.setDescription(`
**You Asked:** ${soru}
**My answer:** ${cevap}
`)
.setFooter('Cheems Bot')
message.channel.send(uwu)
}
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["askcheems"],
  permLevel: 0 
};

exports.help = {
  name: 'cheemsesor', 
  description: 'soru sorar',
  usage: 'cheemsesor <soru>'
};