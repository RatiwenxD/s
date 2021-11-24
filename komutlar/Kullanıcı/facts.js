const { MessageEmbed, MessageAttachment } = require("discord.js");
const pop = require("popcat-wrapper");
exports.run = async (client, message, args) => {
 
    if (!args[0]) return message.channel.send(`correct usage: c+fact word1`)
 

  let img = await pop.facts(args.join(" "))
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
  name: "fact",
  description: "drk",
  usage: "fact"
};