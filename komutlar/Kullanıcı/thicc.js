const Discord = require('discord.js'); 
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => { 
  const dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
    var sayı = [Math.floor(Math.random() * 10)];


if (!dil) {

const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`ThicnessMeter 3200`)
.setDescription(`${user.username} Named Person is ${sayı}/10 THICC`)

message.channel.send(sj) 
}
if (dil === 'TR') {
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`KalınKafalıÖlçücü 3200`)
.setDescription(`${user.username} Named Person is ${sayı}/10 THICC`) 
message.channel.send(sj) 
}
if (dil === 'EN') {
const sayfa = []
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`ThicnessMeter 3200`)
.setDescription(`${user.username} Named Person is ${sayı}/10 THICC`)
message.channel.send(sj) 
}
}; 


module.exports.conf = {
  aliases: ["kalınkafalı"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "thicc",
  description: "",
  usage: "thicc"
};