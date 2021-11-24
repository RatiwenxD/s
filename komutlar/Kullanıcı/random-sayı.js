const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
exports.run = async (client, message, args) => { 

   axios.get('http://www.plantiostudio.ml/api/number')
  .then(function (response) {

     let embed = new Discord.MessageEmbed()
.setDescription(`
Number / Sayı: ${response.data.plantiosayi}
`)
.setColor("RED")
message.channel.send(embed)
   
  })
  .catch(function (error) {
   message.channel.send("Something Went Go Wrong / Bir şeyler Yanlış Gitti")
  })




};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["random-number","random-sayı"],
  permLevel: 0
};

exports.help = {
  name: 'randomnumber',
  description: '.',
   usage:'randomnumber'
};