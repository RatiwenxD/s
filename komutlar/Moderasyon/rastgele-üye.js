const Discord = module.require('discord.js');
const client = new Discord.Client();
const db = require("cheemsdb")
db.setReadable(true)
module.exports.run = async (bot, message, args) => {

  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
if (!dil) {
    const embed = new Discord.MessageEmbed()
    .setColor('#00ff21')
    .setTitle('Random Member')
    .setDescription(message.guild.members.cache.random().displayName)
    .setThumbnail(message.author.avatarURL())
    .setFooter('Choosen Member')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}
if (dil === 'TR') {
    const embed = new Discord.MessageEmbed()
    .setColor('#00ff21')
    .setTitle('Rastgele kullanıcı')
    .setDescription(message.guild.members.cache.random().displayName)
    .setThumbnail(message.author.avatarURL())
    .setFooter('Rastgele Kullanıcı Başarıyla Seçildi')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}
if (dil === 'EN') {
    const embed = new Discord.MessageEmbed()
    .setColor('#00ff21')
    .setTitle('Random Member')
    .setDescription(message.guild.members.cache.random().displayName)
    .setThumbnail(message.author.avatarURL())
    .setFooter('Choosen Member')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["random-member"],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-üye'
};