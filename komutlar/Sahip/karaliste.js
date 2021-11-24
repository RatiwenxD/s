const Discord = require('discord.js')
const db = require("cheemsdb")
db.setReadable(true)
const ayarlar = require("../../ayarlar.json");
exports.run = (client,message,args)=>{

if(message.author.id !== ayarlar.sahip) return message.channel.send('Bu komut sahibimin komudu. Bunu kullanmak için izniniz yok!!')
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    let reason = args.slice(1).join(' ')
    if(!user) 
      return message.channel.send('Karalisteye almam için bir kullanıcı etiketleyin !!')
if(!reason) 
  return message.channel.send('Lütfen bir sebep belirtin !')

    db.set(`kliste.${user.id}`, reason);
    message.channel.send(`**${user.tag}** adlı kişi ${reason} sebebinden karalisteye alındı `)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kara-liste', 'karaliste', 'kl'],
  permLevel: 0
}

exports.help ={
    name:'karaliste',
    aliases:['kl'],
    description:'Kullanıcıyı karalisteye alır.',
};