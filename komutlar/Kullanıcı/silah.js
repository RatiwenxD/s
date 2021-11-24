const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  let link = `https://api.devs-hub.xyz/gun?image=${user.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `hamza.png`);


  message.channel.send(ek)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: ["gun"]
};

exports.help = {
  name: "silah",
  description: "Bir kişiyi boğazlarsınız",
  usage: "silah"
};