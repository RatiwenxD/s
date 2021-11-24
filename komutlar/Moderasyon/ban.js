const Discord = require('discord.js');


const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => {
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
  let u = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  let n = args.slice(1).join(" ");
  if (!dil) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("you do not have permission to use this command");
    if (!client.guilds.cache.get(message.guild.id).me.hasPermission("BAN_MEMBERS")) return message.channel.send("i dont have BAN_MEMBERS permission, try this commands after giving me BAN_MEMBERS permission");
    if (!u) return message.channel.send("Tag the person you want to ban");
    if(u.id === message.author.id) return message.channel.send('Bro You Cant Ban Yourself');
    if (!n) return message.channel.send("You Should Write A Reason");
           message.channel.send(`${u} named user is Banned`);
           message.guild.member(u).ban({ reason: n });
}
if (dil === 'TR') {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("bu komutu kullanmak için BAN_MEMEBERS yetkisine sahip olmalısın");
  if (!client.guilds.cache.get(message.guild.id).me.hasPermission("BAN_MEMBERS")) return message.channel.send("şuanki yetkilerimde BAN_MEMBERS yetkisi bulunmadığı için bu komut çalışmıyor , lütfen bana BAN_MEMBERS yetkisini vererek komutu tekrar kullanın lütfen");
  if (!u) return message.channel.send("Banlamak İstediğin Kişiyi Etiketle");
  if(u.id === message.author.id) return message.channel.send('Kanka Kendini Banlayamazsın');
  if (!n) return message.channel.send("Bir Neden Yazmalısın Dostum");
        message.channel.send(`${u} Adlı Kişi ${n} Nedeniyle banlandı`);
        message.guild.member(u).ban({ reason: n });
}
if (dil === 'EN') {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("you do not have permission to use this command");
  if (!client.guilds.cache.get(message.guild.id).me.hasPermission("BAN_MEMBERS")) return message.channel.send("i dont have BAN_MEMBERS permission, try this commands after giving me BAN_MEMBERS permission");
  if (!u) return message.channel.send("Tag the person you want to ban");
  if(u.id === message.author.id) return message.channel.send('Bro You Cant Ban Yourself');
  if (!n) return message.channel.send("You Should Write A Reason");
         message.channel.send(`${u} named user is Banned`);
         message.guild.member(u).ban({ reason: n });
}
};
 
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
module.exports.help = {
  name: "ban",
  description: "kick",
  usage: "ban"
};