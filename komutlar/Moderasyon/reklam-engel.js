const Discord = require('discord.js'); 
const db = require('cheemsdb'); 
const ayarlar = require('../../ayarlar.json')

exports.run = async (client, message, args) => { 
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`) 
    if (!dil) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) {
            message.channel.send(`you do not have permission to use this command`);
            }
            if (message.member.hasPermission(`MANAGE_GUILD`)) {
            if (!args[0]) return message.channel.send(` c+ads-block open \n  c+ads-block closed`) 
            if (args[0] === 'open'){
             await db.set(`sunucu.${message.guild.id}.reklam-engel`,`AÇIK`)
            message.channel.send(`ADS Block System is Opened`) 
            }
            if (args[0] === 'close'){
            db.delete(`sunucu.${message.guild.id}.reklam-engel`)
            message.channel.send(`ADS Block System is Closed`) 
            }}
    }
    if (dil === 'TR') {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) {
            message.channel.send(`you do not have permission to use this command`);
            }
            if (message.member.hasPermission(`MANAGE_GUILD`)) {
            if (!args[0]) return message.channel.send(` c+ads-block open \n  c+ads-block closed`) 
            if (args[0] === 'aç'){
             await db.set(`sunucu.${message.guild.id}.reklam-engel`,`AÇIK`)
            message.channel.send(`Reklam Engel Başarıyla Açıldı`) 
            }
            if (args[0] === 'kapat'){
            db.delete(`sunucu.${message.guild.id}.reklam-engel`)
            message.channel.send(`Reklam Engel Başarıyla Kapatıldı`) 
            }}
    }
    if (dil === 'EN') {
    if (!message.member.hasPermission(`MANAGE_GUILD`)) {
    message.channel.send(`you do not have permission to use this command`);
    }
    if (message.member.hasPermission(`MANAGE_GUILD`)) {
    if (!args[0]) return message.channel.send(` c+ads-block open \nc+ads-block closed`) 
    if (args[0] === 'open'){
     await db.set(`sunucu.${message.guild.id}.reklam-engel`,`AÇIK`)
    message.channel.send(`ADS Block System is Opened`) 
    }
    if (args[0] === 'close'){
    db.delete(`sunucu.${message.guild.id}.reklam-engel`)
    message.channel.send(`ADS Block System is Closed`) 
    }}
}
 

}; 


module.exports.conf = {
  aliases: ["ads-block"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "reklam-engel",
  description: "",
  usage: "reklam-engel"
};