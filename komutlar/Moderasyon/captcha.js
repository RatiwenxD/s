const Discord = require('discord.js'); 
const db = require('cheemsdb'); 
const ayarlar = require('../../ayarlar.json')

exports.run = async (client, message, args) => { 
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`) 
    if (!dil) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`you do not have permission to use this command`);
        if (message.member.hasPermission(`MANAGE_GUILD`)) {
        if (!args[0]) return message.channel.send(`c+captcha channel-set #channel \n c+captcha role-set @role \n  c+captcha reset`) 
        let kanal = message.mentions.channels.first()
        let rol = message.mentions.roles.first()
        if (args[0] === 'channel-set'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.captcha_kanal`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
        message.channel.send(`Captcha channel is ${kanal} now`) 
        }
        if (!kanal) return message.channel.send(`correct usage c+captcha channel-set #channel`) 
        }
        if (args[0] === 'role-set'){
          if (rol) {
           await db.set(`sunucu.${message.guild.id}.captcha_rol`,rol.id)
           await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
          message.channel.send(`Captcha Role is ${rol.name} now`) 
          }
          if (!rol) return message.channel.send(`correct usage c+captcha role-set @role`) 
          }
           if (args[0] === 'reset'){
        await db.delete(`sunucu.${message.guild.id}.captcha_rol`)
        await db.delete(`sunucu.${message.guild.id}.captcha_kanal`)
        await db.delete(`sunucu.${message.guild.id}.captcha`)
        message.channel.send(`captcha has reseted!`) 
        
        }}}
 //---------------------------------------------------------------------------//   
        if (dil === 'TR') {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`Ne yazık ki bu komutu kullanmaya yetkin yok`);
        if (message.member.hasPermission(`MANAGE_GUILD`)) {
        if (!args[0]) return message.channel.send(`c+captcha kanal-ayarla #kanal \n c+captcha rol-ayarla @rol \n Sıfırlamak için c+captcha sıfırla`) 
        let kanal = message.mentions.channels.first()
        let rol = message.mentions.roles.first()
        if (args[0] === 'kanal-ayarla'){
        if (kanal) {
         await db.set(`sunucu.${message.guild.id}.captcha_kanal`,kanal.id)
         await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
        message.channel.send(`Captcha Kanalı ${kanal} Olarak Ayarlandı`) 
        }
        if (!kanal) return message.channel.send(`Doğru Kullanımı c+captcha kanal-ayarla #kanal`) 
        }
        if (args[0] === 'rol-ayarla'){
          if (rol) {
           await db.set(`sunucu.${message.guild.id}.captcha_rol`,rol.id)
           await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
          message.channel.send(`Captcha Rolu ${rol.name} Olarak Ayarlandı`) 
          }
          if (!rol) return message.channel.send(`Doğru Kullanımı c+captcha rol-ayarla @rol`) 
          }
           if (args[0] === 'sıfırla'){
        await db.delete(`sunucu.${message.guild.id}.captcha_rol`)
        await db.delete(`sunucu.${message.guild.id}.captcha_kanal`)
        await db.delete(`sunucu.${message.guild.id}.captcha`)
        message.channel.send(`captcha sıfırlandı!`) 
        
        }}}
//---------------------------------------------------------------------------//   
if (dil === 'EN') {
  if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.channel.send(`you do not have permission to use this command`);
  if (message.member.hasPermission(`MANAGE_GUILD`)) {
  if (!args[0]) return message.channel.send(`c+captcha channel-set #channel \n c+captcha role-set @role \n  c+captcha reset`) 
  let kanal = message.mentions.channels.first()
  let rol = message.mentions.roles.first()
  if (args[0] === 'channel-set'){
  if (kanal) {
   await db.set(`sunucu.${message.guild.id}.captcha_kanal`,kanal.id)
   await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
  message.channel.send(`Captcha channel is ${kanal} now`) 
  }
  if (!kanal) return message.channel.send(`correct usage c+captcha channel-set #channel`) 
  }
  if (args[0] === 'role-set'){
    if (rol) {
     await db.set(`sunucu.${message.guild.id}.captcha_rol`,rol.id)
     await db.set(`sunucu.${message.guild.id}.captcha`,`AÇIK`)
    message.channel.send(`Captcha Role is ${rol.name} now`) 
    }
    if (!rol) return message.channel.send(`correct usage c+captcha role-set @role`) 
    }
     if (args[0] === 'reset'){
  await db.delete(`sunucu.${message.guild.id}.captcha_rol`)
  await db.delete(`sunucu.${message.guild.id}.captcha_kanal`)
  await db.delete(`sunucu.${message.guild.id}.captcha`)
  message.channel.send(`captcha has reseted!`) 
  
  }}}
 

}; 


module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "captcha",
  description: "",
  usage: "captcha"
};