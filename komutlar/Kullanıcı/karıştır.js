const Discord = require('discord.js');
const {scrabbleify} = require('@hyggedyne/scrabbleify')
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => {
  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
  var a = args.join(' ');
  var av = scrabbleify(a);
  if (!dil) {
if(!a) return message.reply('Pls write Something to mix')
const uwu = new Discord.MessageEmbed()
.setDescription(`
**Your Words:** ${a}
**Mixed Words:** ${av}
`)
message.channel.send(uwu)
}
    
if (dil === 'TR') {
if(!a) return message.reply('Karıştırmam için birşeyler yazın')
const uwu = new Discord.MessageEmbed()
.setDescription(`
**Senin Yazdığın:** ${a}
**Karıştırılmış Hali:** ${av}
`)

message.channel.send(uwu)
}
    
if (dil === 'EN') {
if(!a) return message.reply('Pls write Something to mix')
const uwu = new Discord.MessageEmbed()
.setDescription(`
**Your Words:** ${a}
**Mixed Words:** ${av}
`)
message.channel.send(uwu)
}
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["mix"],
  permLevel: 0 
};

exports.help = {
  name: 'karıştır', 
  description: '',
  usage: 'karıştır <kelime>'
};