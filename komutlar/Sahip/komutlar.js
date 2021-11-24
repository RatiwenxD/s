const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 
     message.channel.send(
      `**_Toplam Komut Sayısı:_**` + `\`${client.commands.size}\`` + `\n**Komutlar:** \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`)

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: "komutlar",
  description: "Bota eklenmiş tüm komutları listeler.",
  usage: "all-commands"
};