const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const Captcha = require("@haileybot/captcha-generator");
const db = require("cheemsdb")
db.setReadable(true)

const Topgg = require('@top-gg/sdk')

const api = new Topgg.Api(ayarlar.topgg)

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,

  })
}, 1800000)
app.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

client.on("ready", () => {
  console.log(`Bütün Komutlar Yüklendi!`);
  
  client.user.setActivity(`Woof Woof v2.2.0`);

});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdirSync('./komutlar').forEach(dir => {
  fs.readdir(`./komutlar/${dir}/`, (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
      let props = require(`./komutlar/${dir}/${f}`);
      console.log(`Yüklenen komut: ${props.help.name}.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
        
      });
    });
  });
})

client.yetkiler = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = -ayarlar.varsayilanperm;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === message.guild.ownerID) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};
client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;

  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    let karaliste = db.fetch(`kliste.${message.author.id}`);
   const karalistedesin = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error!')
    .setDescription('You Are in Blacklisted You Cant Use Commands')
    .addField('Blacklist Reason', karaliste)
   if(karaliste) return message.channel.send(karalistedesin)
    
   let bak = db.fetch(`bakım`);
   const bakım = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hello ')
    .setDescription('Hello Our User We Have a Maintance For 1-2 Hour , No One Can Use Commands in This time')
   if(bak) return message.channel.send(bakım)
    


    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    

  }
});
const log = message => {
    console.log(`Cheems: ${message}`);
};

client.on("warn", info => console.log(info));
client.on("error", console.error )
//---------------------------------ek---------------------------------\\

//bb mesaj
client.on("guildMemberRemove", member => {
  const dil = db.fetch(`sunucu.${member.guild.id}.dil`)
  const bbe = db.get(`sunucu.${member.guild.id}.bb_e`)
  const bb = db.get(`sunucu.${member.guild.id}.bb`)
  const k = member.guild.channels.cache.find(r => r.id === bb);
  let user = client.users.cache.get(member.id);
          if (!bbe) return;
          if (bbe === 'AÇIK'){
          if (!dil) {
              const bby = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Goodbye! <@" + member + "> We Are  **" + member.guild.memberCount + "** Member Without You")
              k.send(bby) 
          }
          if (dil === 'TR') {
              const bby2 = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Görüşürüz! <@" + member + "> Sensiz **" + member.guild.memberCount + "** Üyeyiz")
              k.send(bby2)  
          }
          if (dil === 'EN') {
              const bby3 = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Goodbye! <@" + member + "> We Are  **" + member.guild.memberCount + "** Member Without You")
              k.send(bby3)  
          }}})
//hg mesaj         
client.on("guildMemberAdd", member => {
  const dil = db.fetch(`sunucu.${member.guild.id}.dil`)
  const hge = db.get(`sunucu.${member.guild.id}.hg_e`)
  const hg = db.get(`sunucu.${member.guild.id}.hg`)
  const k = member.guild.channels.cache.find(r => r.id === hg);
  let user = client.users.cache.get(member.id);
  let avatar =  user.avatarURL({ format: "png", size: 1024 })

          if (!hge) return;
          if (hge === 'AÇIK'){
          if (!dil) {
              const hgg = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Welcome! <@" + member + "> We Are  **" + member.guild.memberCount + "** Member With You")
              k.send(hgg) 
          }
          if (dil === 'TR') {
              const hgg2 = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Hoşgeldin! <@" + member + "> Seninle Beraber **" + member.guild.memberCount + "** Kişiyiz")
              k.send(hgg2)  
          }
          if (dil === 'EN') {
              const hgg3 = new Discord.MessageEmbed()
              .setColor('#8A2BE2') 
              .setDescription("Welcome! <@" + member + "> We Are  **" + member.guild.memberCount + "** Member With You")
              k.send(hgg3)  
          }}})                  


client.on('message', msg => {
  if (msg.content === 'cheems') {
    msg.react('🍔')

  }
  if (msg.content === 'amogus') {
    msg.react('<:sus:882245623905140817>')
}
})

  let links = JSON.parse(fs.readFileSync("./jsons/linkler.json", "utf8"));
  client.on('message', msg => {
  const dil = db.fetch(`sunucu.${msg.guild.id}.dil`)
  const re = db.fetch(`sunucu.${msg.guild.id}.reklam-engel`)
  
if (dil === 'TR') var mesaj = 'Bu Sunucuda Reklam Engel Açık Reklam Yapamazsın'; 
if (dil === 'EN') var mesaj = 'This Server Has ADS Block , You Cant Make ADS';
if (!dil) var mesaj = 'This Server Has ADS Block , You Cant Make ADS';
  if (msg.author.id === "876965300619313165") return;
if (re === "AÇIK") {
    if (links.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete({ timeout: 1 })
      msg.channel.send("<@"+msg.author+"> "+ mesaj)
   }}}})

   client.on('messageUpdate', (oldMessage, newMessage) => {
    const dil = db.fetch(`sunucu.${oldMessage.guild.id}.dil`)
    const re = db.fetch(`sunucu.${oldMessage.guild.id}.reklam-engel`)
  
  if (dil === 'TR') var mesaj = 'Bu Sunucuda Reklam Engel Açık Reklam Yapamazsın'; 
  if (dil === 'EN') var mesaj = 'This Server Has ADS Block , You Cant Make ADS';
  if (!dil) var mesaj = 'This Server Has ADS Block , You Cant Make ADS';
     if (re === "AÇIK") {
      if (links.some(word => newMessage.content.toLowerCase().includes(word))) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
          newMessage.delete({ timeout: 1 })
          newMessage.channel.send("<@"+newMessage.author+"> "+ mesaj)
     }}}})

client.on("guildMemberAdd", member => {
  const dil = db.fetch(`sunucu.${member.guild.id}.dil`)
  var kanal = db.fetch(`sunucu.${member.guild.id}.captcha_kanal`)
  var rol = db.fetch(`sunucu.${member.guild.id}.captcha_rol`)
  const k = member.guild.channels.cache.find(r => r.id === kanal);
  if (dil === 'TR') var mesaj = 'Aşağıdaki resimde gösterilen metni girin'; 
  if (dil === 'EN') var mesaj = 'Enter the text shown in the image below';
  if (!dil) var mesaj = 'Enter the text shown in the image below';
if (db.fetch(`sunucu.${member.guild.id}.captcha`,"AÇIK")) {
  let captcha = new Captcha();
	k.send("** <@"+member.id+"> "+mesaj+":**")
  var attachment =	new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg")
  k.send(attachment)
//------------------------------------------------//
if (dil === 'TR') var m2 = 'Başarıyla Doğrulandı!'; 
if (dil === 'EN') var m2 = 'Verified Successfully!';
if (!dil) var m2 = 'Verified Successfully!';
if (dil === 'TR') var m3 = 'Başarısız Doğrulama!'; 
if (dil === 'EN') var m3 = 'Failed Verification!';
if (!dil) var m3 = 'Failed Verification!';
//------------------------------------------------//
  let collector = k.createMessageCollector(m => m.author.id === member.id);
	collector.on("collect", m => {
		if (m.content.toUpperCase() === captcha.value) k.send(m2).then(member.roles.add(rol))
		else k.send(m3);
		collector.stop();
	});
}})


     
client.login(ayarlar.token);