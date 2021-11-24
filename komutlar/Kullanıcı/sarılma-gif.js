const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
exports.run = async (client, message, args) => { 

   axios.get("https://some-random-api.ml/animu/hug")
  .then(function (response) {

     let embed = new Discord.MessageEmbed()
.setImage(response.data.link)
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
  aliases: ["sarılma-gif"],
  permLevel: 0
};

exports.help = {
  name: 'hug-gif',
  description: '.',
   usage:'hug-gif'
};