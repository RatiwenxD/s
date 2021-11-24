const Meme = require("memer-api")
const Discord = require("discord.js")
const memer = new Meme('nkwVqn3Jyqn');
exports.run = async (client, message, args) => {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
          user = message.author;
      }
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    
    memer.youtube(avatar, user.username, args.join(" ")).then(image => {
        var attachment = new Discord.MessageAttachment(image, "cheems.png");
        message.channel.send(attachment)


  
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: []
};

exports.help = {
  name: "youtube",
  description: "tz",
  usage: "youtube"
};