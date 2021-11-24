
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
exports.run = async (client, message, args) => { 

   axios.get("https://nekobot.xyz/api/imagegen?type=clyde&text="+args.join(" "))
  .then(function (response) {
message.channel.send(response.data.message)
   
  })
  .catch(function (error) {
    message.channel.send("Something Went Go Wrong / Bir şeyler Yanlış Gitti")
  })




};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'clyde',
  description: '.',
   usage:'clyde'
};