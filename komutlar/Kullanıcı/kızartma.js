const Discord = require("discord.js");
const { get } = require("superagent");


module.exports.run = async (bot, message, args, client) => {

 


let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
  var cheemsland = user.avatarURL({ format: 'png', dynamic: true, size: 1024 });

        let url = `https://nekobot.xyz/api/imagegen?type=deepfry&image=${cheemsland}`
        get(url).then(res => {
            
                 message.channel.send(res.body.message);
            
        });
    


}  
    

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
module.exports.help = {
  name: 'deepfry',
  description: 'e',
  usage: 'deepfry '
};