const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {


  
  let link = `https://api.devs-hub.xyz/panik?panik=${args[0]}&kalm=${args[1]}&panik2=${args[2]}`;

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
  name: "panik",
  description: "Bir kişiyi boğazlarsınız",
  usage: "panik"
};