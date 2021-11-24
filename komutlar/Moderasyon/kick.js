const Discord = require('discord.js');


const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => {
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
  let u = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  let n = args.slice(1).join(" ");
  if (!dil) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("you do not have permission to use this command");
    if (!client.guilds.cache.get(message.guild.id).me.hasPermission("KICK_MEMBERS")) return message.channel.send("i dont have KICK_MEMBERS permission, try this commands after giving me KICK_MEMBERS permission");
    if (!u) return message.channel.send("Tag the person you want to kick");
    if(u.id === message.author.id) return message.channel.send('Bro You Cant Kick Yourself');
    if (!n) return message.channel.send("You Should Write A Reason");
           message.channel.send(`${u} named user is Kicked`);
           message.guild.member(u).kick(n);
}
if (dil === 'TR') {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("bu komutu kullanmak için BAN_MEMEBERS yetkisine sahip olmalısın");
  if (!client.guilds.cache.get(message.guild.id).me.hasPermission("KICK_MEMBERS")) return message.channel.send("şuanki yetkilerimde KICK_MEMBERS yetkisi bulunmadığı için bu komut çalışmıyor , lütfen bana KICK_MEMBERS yetkisini vererek komutu tekrar kullanın lütfen");
  if (!u) return message.channel.send("Atmak İstediğin Kişiyi Etiketle");
  if(u.id === message.author.id) return message.channel.send('Kanka Kendini Atamazsın');
  if (!n) return message.channel.send("Bir Neden Yazmalısın Dostum");
        message.channel.send(`${u} Adlı Kişi atıldı`);
        message.guild.member(u).kick(n);
}
if (dil === 'EN') {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("you do not have permission to use this command");
  if (!client.guilds.cache.get(message.guild.id).me.hasPermission("KICK_MEMBERS")) return message.channel.send("i dont have KICK_MEMBERS permission, try this commands after giving me KICK_MEMBERS permission");
  if (!u) return message.channel.send("Tag the person you want to kick");
  if(u.id === message.author.id) return message.channel.send('Bro You Cant Kick Yourself');
  if (!n) return message.channel.send("You Should Write A Reason");
         message.channel.send(`${u} named user is Kicked`);
         message.guild.member(u).kick(n);
}
};
 
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: 0
};
 
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};