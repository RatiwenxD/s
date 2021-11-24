const { MessageEmbed, MessageAttachment } = require("discord.js");
const DIG = require("discord-image-generation");
exports.run = async (client, message, args) => {


  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
  let img = await new DIG.NotStonk().getImage(avatar)
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
  name: "notstonks",
  description: "Bir kişiyi boğazlarsınız",
  usage: "notstonks"
};