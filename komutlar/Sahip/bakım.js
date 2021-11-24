const Discord = require('discord.js')
const db = require("cheemsdb")
db.setReadable(true)
const ayarlar = require("../../ayarlar.json");
exports.run = (client, message, args)=>{
if(message.author.id !== ayarlar.sahip) return message.channel.send('Bu komut sahibimin komudu. Bunu kullanmak için izniniz yok!!')
    let r = args[0]

    if(!r) 
    return message.channel.send('Açıcakmıyım Kapatıcakmıyım aq')
    if(r = 'aç') {
    db.set(`bakım`,r);
    message.channel.send('Bakım Açıldı :white_check_mark:')
    }else {
    if(r = 'kapat') {
    db.delete(`bakım`);
    message.channel.send('Bakım Kapatıldı :white_check_mark:')
      }
    }


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help ={
    name:'bakım',
    aliases:['b'],
    description:'bakım ab',
};