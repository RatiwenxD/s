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
        if (!args[0]) return message.channel.send(`c+joinChannel set #channel \nc+joinChannel reset`) 
        
        let kanal = message.mentions.channels.first()
        if (args[0] === 'set'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.hg`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.hg_e`,`AÇIK`)
        message.channel.send(`Join Channel is ${kanal} now`) 
        
        }
        if (!kanal) return message.channel.send(`Correct Usage c+joinChannel set #channel`) 
        }
           if (args[0] === 'reset'){
        await db.delete(`sunucu.${message.guild.id}.hg`)
        await db.set(`sunucu.${message.guild.id}.hg_e`,`KAPALI`)
        message.channel.send(`Join Channel Has Reseted`) 
        
        }}}
    if (dil === 'TR') {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) {
            message.channel.send(`Ne yazık ki bu komutu kullanmaya yetkin yok`);
          }
        if (message.member.hasPermission(`MANAGE_GUILD`)) {
        if (!args[0]) return message.channel.send(`Ayarlamak İçin c+hgKanalı ayarla #kanal \n Sıfırlamak İçin c+hgKanalı sıfırla`) 
        
        let kanal = message.mentions.channels.first()
        if (args[0] === 'ayarla'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.hg`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.hg_e`,`AÇIK`)
        message.channel.send(`Hoşgeldin Kanalı ${kanal} Olarak Ayarlandı`) 
        
        }
        if (!kanal) return message.channel.send(`Doğru Kullanımı c+hgKanalı ayarla #kanal`) 
        }
           if (args[0] === 'sıfırla'){
        await db.delete(`sunucu.${message.guild.id}.hg`)
        await db.set(`sunucu.${message.guild.id}.hg_e`,`KAPALI`)
        message.channel.send(`Hoşgeldin Kanalı sıfırandı`) 
        
        }}}
    if (dil === 'EN') {
      if (!message.member.hasPermission(`MANAGE_GUILD`)) {
        message.channel.send(`you do not have permission to use this command`);
      }
    if (message.member.hasPermission(`MANAGE_GUILD`)) {
    if (!args[0]) return message.channel.send(` c+joinChannel set #channel \n  c+joinChannel reset`) 
    
    let kanal = message.mentions.channels.first()
    if (args[0] === 'set'){
    if (kanal) {
     await db.set(`sunucu.${message.guild.id}.hg`,kanal.id)
     await db.set(`sunucu.${message.guild.id}.hg_e`,`AÇIK`)
    message.channel.send(`Join Channel is ${kanal} now`) 
    
    }
    if (!kanal) return message.channel.send(`Correct Usage c+joinChannel set #channel`) 
    }
       if (args[0] === 'reset'){
    await db.delete(`sunucu.${message.guild.id}.hg`)
    await db.set(`sunucu.${message.guild.id}.hg_e`,`KAPALI`)
    message.channel.send(`Join Channel Has Reseted`) 
    
    }}}
 

}; 


module.exports.conf = {
  aliases: ["JoinChannel","joinChannel"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "hgKanalı",
  description: "",
  usage: "hgKanalı"
};