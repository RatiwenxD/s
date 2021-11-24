const { MessageEmbed, MessageAttachment } = require("discord.js");
const pop = require("popcat-wrapper");
exports.run = async (client, message, args) => {
 
    if (!args[0]) return message.channel.send(`correct usage: c+drake word1 word2`)
    if (!args[1]) return message.channel.send(`correct usage: c+drake word1 word2`)

  let img = await pop.drake(args[0], args[1])
  const ek = new MessageAttachment(img, `cheems.png`);


  message.channel.send(ek)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: []
};

exports.help = {
  name: "drake",
  description: "drk",
  usage: "drake"
};