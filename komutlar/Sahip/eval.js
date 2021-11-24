const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const express = require("express");
const db = require("cheemsdb")
db.setReadable(true)
const pop = require("popcat-wrapper");
const ayarlar = require("../../ayarlar.json");
exports.run = async (client, message, args, color, prefix, Attachments) => {

  if(message.author.id !== ayarlar.sahip) return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
    try {
        let codein = args.join(" ");
        let code = eval(codein);
      if (codein === "client.token") return message.reply(`o ne krşm`)
      if (codein.length < 1) return message.reply(`deneyebilmek için bir kod girmelisin!`)
      
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('» Kod', `\`\`\`js\n${codein}\`\`\``)
        .addField('» Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField('» Hata', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kod'],
    permLevel: 7
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval'
  };