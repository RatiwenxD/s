const Discord = require("discord.js");
const db = require("cheemsdb")
db.setReadable(true)

exports.run = async (client, message, args, guild) => {
  var dil = await db.fetch(`sunucu.${message.guild.id}.dil`)
  
  let kanal = "878061933369122856";
  let istek = args.slice(0).join(' ')
  if (!dil) {
    if(!istek) return message.channel.send("**Can You Pls Type Your Suggestion ? Correct Usage; c+suggest <suggetion>**")
  
  
  
    const mesaj = new Discord.MessageEmbed()
    .setTitle("Successful !")
    .setDescription("**Your Suggestion Has Been Submitted, Thank You**")
    .setColor("#30FD00")
    message.channel.send(mesaj)


    const öneri = new Discord.MessageEmbed()
    .setTitle("New Suggestion")
    .addField("The User Who Submitted the Suggestion;", message.author)
    .addField("Suggestion;", istek)
    client.channels.cache.get(kanal).send(öneri)
  }
  if (dil === 'TR') {
    if(!istek) return message.channel.send("**İsteğini Yazar Mısın ? Örnek Kullanım; c+öneri <öneri>**")
  
  
  
    const mesaj = new Discord.MessageEmbed()
    .setTitle("Başarılı !")
    .setDescription("**Önerin Başarıyla Sahibime İletildi !**")
    .setColor("#30FD00")
    message.channel.send(mesaj)


    const öneri = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri !")
    .addField("Öneriyi Gönderen Kullanıcı;", message.author)
    .addField("Öneri;", istek)
    client.channels.cache.get(kanal).send(öneri)
  }
  if (dil === 'EN') {
    if(!istek) return message.channel.send("**Can You Pls Type Your Suggestion ? Correct Usage; c+suggest <suggetion>**")
  
  
  
    const mesaj = new Discord.MessageEmbed()
    .setTitle("Successful !")
    .setDescription("**Your Suggestion Has Been Submitted, Thank You**")
    .setColor("#30FD00")
    message.channel.send(mesaj)


    const öneri = new Discord.MessageEmbed()
    .setTitle("New Suggestion")
    .addField("The User Who Submitted the Suggestion;", message.author)
    .addField("Suggestion;", istek)
    client.channels.cache.get(kanal).send(öneri)
  }

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['suggest'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'öneri',
    description: 'h',
    usage: 'öneri'
  };