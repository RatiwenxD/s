const Discord = require('discord.js'); 
const db = require("cheemsdb")
db.setReadable(true)


exports.run = async (client, message, args) => { 

var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

if (!dil) {
const sj = new Discord.MessageEmbed()  
.setColor("BLUE")
.setTitle(`__**Cheems Bot Join-Leave Menu**__`)
.setDescription(`
<:settings:826524017954652230> Leaves \`c+LeaveChannel\` 
<:settings:826524017954652230> Joins \`c+JoinChannel\` 
`)
message.channel.send(sj) 
}
if (dil === 'TR') {
const sj = new Discord.MessageEmbed() 
.setColor("BLUE")
.setTitle(`__**Cheems Bot Hoşgeldin-Görüşürüz Menüsü**__`)
.setDescription(`
<:settings:826524017954652230> Görüşürüz Kanalı için \`c+bbKanalı\` 
<:settings:826524017954652230> Hoşgeldin Kanalı için \`c+hgKanalı\` 
`)
message.channel.send(sj) 
}
if (dil === 'EN') {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle(`__**Cheems Bot Join-Leave Menu**__`)
.setDescription(`
<:settings:826524017954652230> Leaves \`c+LeaveChannel\` 
<:settings:826524017954652230> Joins \`c+JoinChannel\` 
`)
message.channel.send(sj) 
}

  
 

}; 


exports.conf = {
  aliases: ["join-leave","jl"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "hg-bb",
  description: "",
  usage: "hg-bb"
};