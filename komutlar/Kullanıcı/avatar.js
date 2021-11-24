const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("cheemsdb")
db.setReadable(true)
exports.run = async (client, message, args) => {
  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
   

  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **[[GIF]](${user.displayAvatarURL({ format: 'gif',  size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
message.channel.send(embed)

}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
   usage:'avatar'
} 