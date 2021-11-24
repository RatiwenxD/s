const Discord = require("discord.js");
const { get } = require("superagent");

const db = require("cheemsdb")
db.setReadable(true)
module.exports.run = async (bot, message, args, client) => {

  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

if (!dil) {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  if (!message.mentions.users.first()) {
    message.channel.send(`Please Tag Some One`)
  }
  if (message.mentions.users.first()) {
    const member = message.guild.member(user);
  var avatarm = message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 });
var avatare = message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 1024 });
        let url = `https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${avatarm}&user2=${avatare}`
        get(url).then(res => {
            
                 message.channel.send(res.body.message);
            
        })}};
    


if (dil === 'TR') {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  if (!message.mentions.users.first()) {
    message.channel.send(`Lütfen Birini Etiketle Doğru Kullanımı: c+kimkazanır @cheems`)
  }
  if (message.mentions.users.first()) {
    const member = message.guild.member(user);
  var avatarm = message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 });
var avatare = message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 1024 });
        let url = `https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${avatarm}&user2=${avatare}`
        get(url).then(res => {
            
                 message.channel.send(res.body.message);
        
          })}};
if (dil === 'EN') {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  if (!message.mentions.users.first()) {
    message.channel.send(`Please Tag Some One`)
  }
  if (message.mentions.users.first()) {
    const member = message.guild.member(user);
  var avatarm = message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 });
var avatare = message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 1024 });
        let url = `https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${avatarm}&user2=${avatare}`
        get(url).then(res => {
            
                 message.channel.send(res.body.message);
            
        })}}}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whowouldwin"],
  permLevel: 0
};
 
module.exports.help = {
  name: 'kimkazanır',
  description: 'e',
  usage: 'kimkazanır'
};