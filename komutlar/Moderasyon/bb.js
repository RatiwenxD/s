const Discord = require('discord.js'); 
const db = require('cheemsdb'); 
const ayarlar = require('../../ayarlar.json')

exports.run = async (client, message, args) => { 
    const dil = await db.fetch(`sunucu.${message.guild.id}.dil`) 
    if (!dil) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) {
            message.channel.send(`you do not have permission to use this command`);
          }
        if (!args[0]) return message.channel.send(`c+leaveChannel set #channel \n c+leaveChannel reset`) 
        if (message.member.hasPermission(`MANAGE_GUILD`)) {
        let kanal = message.mentions.channels.first()
        if (args[0] === 'set'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.bb`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.bb_e`,`AÇIK`)
        message.channel.send(`Leave Channel is ${kanal} now`) 
        
        }
        if (!kanal) return message.channel.send(`Correct Usage c+leaveChannel set #channel`) 
        }
           if (args[0] === 'reset'){
        await db.delete(`sunucu.${message.guild.id}.bb`)
        await db.set(`sunucu.${message.guild.id}.bb_e`,`KAPALI`)
        message.channel.send(`Leave Channel Has Reseted`) 
        
        }}}
    if (dil === 'TR') {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) {
            message.channel.send(`Ne yazık ki bu komutu kullanmaya yetkin yok`);
          }
        if (!args[0]) return message.channel.send(`Ayarlamak İçin c+bbKanalı ayarla #kanal \n Sıfırlamak İçin c+bbKanalı sıfırla`) 
        if (message.member.hasPermission(`MANAGE_GUILD`)) {
        let kanal = message.mentions.channels.first()
        if (args[0] === 'ayarla'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.bb`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.bb_e`,`AÇIK`)
        message.channel.send(`Görüşürüz Kanalı ${kanal} Olarak Ayarlandı`) 
        
        }
        if (!kanal) return message.channel.send(`Doğru Kullanımı c+bbKanalı ayarla #kanal`) 
        }
           if (args[0] === 'sıfırla'){
        await db.delete(`sunucu.${message.guild.id}.bb`)
        await db.set(`sunucu.${message.guild.id}.bb_e`,`KAPALI`)
        message.channel.send(`Görüşürüz Kanalı sıfırandı`) 
        
        }}}
    if (dil === 'EN') {
      if (!message.member.hasPermission(`MANAGE_GUILD`)) {
        message.channel.send(`you do not have permission to use this command`);
      }
    if (!args[0]) return message.channel.send(` c+leaveChannel set #channel \n  c+leaveChannel reset`) 
    if (message.member.hasPermission(`MANAGE_GUILD`)) {
    let kanal = message.mentions.channels.first()
    if (args[0] === 'set'){
    if (kanal) {
     await db.set(`sunucu.${message.guild.id}.bb`,kanal.id)
     await db.set(`sunucu.${message.guild.id}.bb_e`,`AÇIK`)
    message.channel.send(`Leave Channel is ${kanal} now`) 
    
    }
    if (!kanal) return message.channel.send(`Correct Usage c+leaveChannel set #channel`) 
    }
       if (args[0] === 'reset'){
    await db.delete(`sunucu.${message.guild.id}.bb`)
    await db.set(`sunucu.${message.guild.id}.bb_e`,`KAPALI`)
    message.channel.send(`Leave Channel Has Reseted`) 
    
    }}}
 

}; 


module.exports.conf = {
  aliases: ["LeaveChannel","leaveChannel"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "bbKanalı",
  description: "",
  usage: "bbKanalı"
};