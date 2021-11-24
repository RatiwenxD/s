const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {


let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

  let link = `https://api.popcat.xyz/pikachu?text=${args.join(" ")}`;

  const ek = new MessageAttachment(link, `cheems.png`);


  message.channel.send(ek)
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: []
};

exports.help = {
  name: "pikachu",
  description: "drk",
  usage: "pikachu"
};