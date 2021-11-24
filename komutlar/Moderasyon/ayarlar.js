const Discord = require('discord.js'); 
const db = require("cheemsdb")
db.setReadable(true)


exports.run = async (client, message, args) => { 

var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
var hg = await db.fetch(`sunucu.${message.guild.id}.hg`)
var bb = await db.fetch(`sunucu.${message.guild.id}.bb`)
var hge = await db.fetch(`sunucu.${message.guild.id}.hg_e`)
var bbe = await db.fetch(`sunucu.${message.guild.id}.bb_e`)
var re = await db.fetch(`sunucu.${message.guild.id}.reklam-engel`)
var cr = await db.fetch(`sunucu.${message.guild.id}.captcha_rol`)
var ck = await db.fetch(`sunucu.${message.guild.id}.captcha_kanal`)
var c = await db.fetch(`sunucu.${message.guild.id}.captcha`)
var tik = "<:tik:846821498839891968>";
var x = "<:x_:846821498567655435>";

if (!dil) {
const sj = new Discord.MessageEmbed() //\`\` , 
.setColor("BLUE")
.setTitle(`__**Server Settings**__`)
.setDescription(`
**Joins Channel:** ${hge ? tik +`(<#${hg}>)` : x}
**Leaves Channel:** ${bbe ? tik +`(<#${bb}>)` : x}
**ADS-Block:** ${re ? tik : x}
**Captcha:** ${c ? tik : x}
**Captcha Channel:** ${ck ? tik +`(<#${ck}>)` : x}
**Captcha Role:**  ${cr ? tik +`(<@&${cr}>)` : x}
`)
message.reply(sj) 
}
if (dil === 'TR') {
const sj = new Discord.MessageEmbed() 
.setColor("BLUE")
.setTitle(`__**Sunucu Ayarları**__`)
.setDescription(`
**Hoşgeldin Kanalı:** ${hge ? tik +`(<#${hg}>)` : x}
**Görüşürüz Kanalı:** ${bbe ? tik +`(<#${bb}>)` : x}
**Reklam Engelleme:** ${re ? tik : x}
**Captcha:** ${c ? tik : x}
**Captcha Kanal:** ${ck ? tik +`(<#${ck}>)` : x}
**Captcha Rol:**  ${cr ? tik +`(<@&${cr}>)` : x}
`)
message.reply(sj) 
}
if (dil === 'EN') {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle(`__**Server Settings**__`)
.setDescription(`
**Joins Channel:** ${hge ? tik +`(<#${hg}>)` : x}
**Leaves Channel:** ${bbe ? tik +`(<#${bb}>)` : x}
**ADS-Block:** ${re ? tik : x}
**Captcha:** ${c ? tik : x}
**Captcha Channel:** ${ck ? tik +`(<#${ck}>)` : x}
**Captcha Role:**  ${cr ? tik +`(<@&${cr}>)` : x}
`)
message.reply(sj) 
}
}; 
exports.conf = {
  aliases: ["ss"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "ayarlar",
  description: "Ğ",
  usage: "ayarlar"
};