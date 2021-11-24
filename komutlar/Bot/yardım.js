const Discord = require('discord.js'); 
const db = require("cheemsdb")
db.setReadable(true)


exports.run = async (client, message, args) => { 

var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)

if (dil === 'TR') {
const sjs = new Discord.MessageEmbed() 
.setColor("BLUE")
.setTitle(`__**Cheems Bot Yardım Menüsü**__`)
.setDescription(`
**🔧 | Moderasyon [13]**
\`captcha\` , \`ban\` , \`kick\` , \`nuke\` , \`avatar\` , \`random-member\` , \`members\` , \`lang\` , \`reklam-engel\` , \`hg-bb\`            

**😂 | Eğlence [34]**
\`cheemsesor\` , \`şüpheölçer\` , \`america\` , \`pikachu\` , \`brazzers\` , \`tweet\` , \`randomkedi\` , \`sarıl\` , \`evlen\` , \`karıştır\` , \`stonks\`, \`notstonks\` , \`clyde\`, \`kominist\` , \`glitch\` , \`wasted\` , \`hapishane\` , \`like\` , \`mavi\` , \`rip\` , \`silah\` , \`simp\` , \`trigger\` ,  \`deepfry\` , \`bonk\` , \`yatak\` , \`sil\` , \`fp\` , \`gay\` , \`öp\` , \`tokat-at\` , \`çöp\` , \`pat-gif\` , \`sarılma-gif\`         

**🤖 | Bot [3]**
\`davet\`, \`istatistik\` , \`ping\` 

[Botu Davet Et](http://dsc.gg/cheemsbot) 
`)

message.channel.send(sjs)
};

if (!dil) {
const sjs = new Discord.MessageEmbed() 
.setColor("BLUE")
.setTitle(`__**Cheems Bot Help Menu**__`)
.setDescription(`
**🔧 | Moderation [13]**
\`captcha\` , \`ban\` , \`kick\` , \`nuke\` , \`avatar\` , \`random-member\` , \`members\` , \`lang\` , \`ads-block\` , \`join-leave\`            
    
**😂 | Fun [36]**
\`askcheems\` , \`susmeter\` , \`america\` , \`facts\` , \`whodidthis\` , \`brazzers\` , \`pikachu\` , \`tweet\` ,  \`randomcat\` , \`hug\` , \`marry\` , \`mix\` , \`stonks\`, \`notstonks\` , \`drake\` ,  \`pat-gif\` , \`hug-gif\` , \`communist\` , \`glitch\` , \`jail\` , \`like\` , \`bluish\` , \`rip\` , \`gun\` , \`simp\` , \`trigger\` ,  \`clyde\` , \`deepfry\` , \`bonk\` , \`bed\` , \`delete\` , \`fp\` , \`gay\` , \`wasted\` , \`kiss\` , \`slap\` , \`spank\` , \`trash\` 

**🤖 | Bot [3]**
\`invite\`, \`stats\` , \`ping\` 
    
[Invıte Bot](http://dsc.gg/cheemsbot) 
`)
message.channel.send(sjs)
};

if (dil === 'EN') {
const sjs = new Discord.MessageEmbed() 
.setColor("BLUE")
.setTitle(`__**Cheems Bot Help Menu**__`)
.setDescription(`
**🔧 | Moderation [13]**
\`captcha\` , \`ban\` , \`kick\` , \`nuke\` , \`avatar\` , \`random-member\` , \`members\` , \`lang\` , \`ads-block\` , \`join-leave\`            
      
**😂 | Fun [36]**
\`askcheems\` , \`susmeter\` , \`america\` , \`facts\` , \`whodidthis\` , \`brazzers\` , \`pikachu\` , \`tweet\` ,  \`randomcat\` , \`hug\` , \`marry\` , \`mix\` , \`stonks\`, \`notstonks\` , \`drake\` ,  \`pat-gif\` , \`hug-gif\` , \`communist\` , \`glitch\` , \`jail\` , \`like\` , \`bluish\` , \`rip\` , \`gun\` , \`simp\` , \`trigger\` ,  \`clyde\` , \`deepfry\` , \`bonk\` , \`bed\` , \`delete\` , \`fp\` , \`gay\` , \`wasted\` , \`kiss\` , \`slap\` , \`spank\` , \`trash\` 
  
**🤖 | Bot [3]**
\`invite\`, \`stats\` , \`ping\` 
      
[Invıte Bot](http://dsc.gg/cheemsbot) 
`)
message.channel.send(sjs)
};

  
 

}; 


exports.conf = {
  aliases: ["help"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "yardım",
  description: "yardım OOGA",
  usage: "yardım"
};