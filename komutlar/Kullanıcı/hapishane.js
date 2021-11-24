const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  let link = `https://api.devs-hub.xyz/jail?image=${user.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `cheems.png`);


  message.channel.send(ek)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: ["hapishane"]
};

exports.help = {
  name: "jail",
  description: "Bir kişiyi boğazlarsınız",
  usage: "jail"
};