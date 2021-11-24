const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("cheemsdb")
db.setReadable(true)
const ayarlar = require("../../ayarlar.json");



exports.run = async (client, message, args, guilds) => {
  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)  
  var komut = client.commands.size
  var sunucu = client.guilds.cache.size
  var ke = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
  var ping = client.ws.ping
  var mesajping = new Date().getTime() - message.createdTimestamp 
  var ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)
  var cpu = os.cpus().map(i => i.model)[0]




 if (!dil) {
 const duration = moment
    .duration(client.uptime)
    .format(" D [Day], H [Hour], m [Minute], s [Second]");
    const msg = new Discord.MessageEmbed()
    .setColor(`orange`)
    .setFooter(client.user.tag, client.user.avatarURL())
    .setTitle(`**Cheems Bot Stats**`)
    .setDescription(`
     <:dev:846766088552316960> Developer <@${ayarlar.sahip}>
     <:istatistik:846732784231252018> **${sunucu}** Server 
     <:kullanc:846732786248581162> **${ke}** User
     <:bot:846732801104805928> There are **${komut}** commands in total
     <:takvim:846732800982777886> Cheems has been up for **${duration}**  
     <:ping:846732785942003723> My Ping is **${ping} MS**
     <:islemci:846732785943445544> Cpu **${cpu}**
     <:sunucu:846732786127863808> Ram **${ram} MB**

     <:sag_ok:846738077904142356> [Invite The Bot](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=0&scope=bot)
     `)
    return message.channel.send(msg)
}

 if (dil === 'EN') {
 const duration = moment
    .duration(client.uptime)
    .format(" D [Day], H [Hour], m [Minute], s [Second]");
    const msg = new Discord.MessageEmbed()
    .setColor(`orange`)
    .setFooter(client.user.tag, client.user.avatarURL())
    .setTitle(`Cheems Bot Stats`)
    .setDescription(`
     <:dev:846766088552316960> Developer <@${ayarlar.sahip}>
     <:istatistik:846732784231252018> **${sunucu}** Server 
     <:kullanc:846732786248581162> **${ke}** User
     <:bot:846732801104805928> There are **${komut}** commands in total
     <:takvim:846732800982777886> Cheems has been up for **${duration}**  
     <:ping:846732785942003723> My Ping is **${ping} MS**
     <:islemci:846732785943445544> Cpu **${cpu}**
     <:sunucu:846732786127863808> Ram **${ram} MB**

     <:sag_ok:846738077904142356> [Invite The Bot](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=0&scope=bot)
     `)
    return message.channel.send(msg)
} 
   if (dil === 'TR') {
 const duration = moment
    .duration(client.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
    const msg = new Discord.MessageEmbed()
    .setColor(`orange`)
    .setFooter(client.user.tag, client.user.avatarURL())
    .setTitle(`Cheems Bot İstatistikler`)
    .setDescription(`
     <:dev:846766088552316960> Developer <@${ayarlar.sahip}>
     <:istatistik:846732784231252018> **${sunucu}** Sunucu 
     <:kullanc:846732786248581162> **${ke}** Kullanıcı
     <:bot:846732801104805928> toplam **${komut}** tane komut var
     <:takvim:846732800982777886> **${duration}**'dir Aktifim 
     <:ping:846732785942003723> Pingim **${ping} MS**
     <:islemci:846732785943445544> İşlemcim **${cpu}**
     <:sunucu:846732786127863808> Ram Kullanımım **${ram} MB**

     <:sag_ok:846738077904142356> [Davet Et](https://discord.com/oauth2/authorize?client_id=876965300619313165&permissions=0&scope=bot) 
     `)
    return message.channel.send(msg)
}
};
       
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","stats"],
  permLevel: 0,
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};