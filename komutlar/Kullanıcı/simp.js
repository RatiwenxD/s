const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {


let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  let link = `https://api.devs-hub.xyz/simp?image=${user.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `cheems.png`);

  const embed = new MessageEmbed()
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://cheems.png`)

    .setTimestamp();

  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: []
};

exports.help = {
  name: "simp",
  description: "Bir kişiyi boğazlarsınız",
  usage: "simp"
};