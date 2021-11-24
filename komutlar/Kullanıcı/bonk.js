const { Discord, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
exports.run = async (client, message, args) => {
 let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	const canvas = Canvas.createCanvas(1210, 1185);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/bdb7c3c2-c371-4c9e-9e7e-9ce03b3bfa86%2Fbonks.jpg?v=1617312768458');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


	// Move the image downwards vertically and constrain its height to 200, so it's a square
	ctx.drawImage(avatar, 15, 550, 1180, 620);

  const attachment = new MessageAttachment(canvas.toBuffer(), 'bonk.jpg');
  message.channel.send(attachment);

  };
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'bonk', 
  description: '',
  usage: 'bonk'
};