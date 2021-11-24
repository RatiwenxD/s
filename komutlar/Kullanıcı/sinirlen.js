const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  let link = `https://api.devs-hub.xyz/trigger?image=${user.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `cheems.png`);


  message.channel.send(ek)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: [`sinirlen`]
};

exports.help = {
  name: "trigger",
  description: "Bir kişiyi boğazlarsınız",
  usage: "trigger"
};