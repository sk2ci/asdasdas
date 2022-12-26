const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (bot, message, args) => {
  
  if (!message.member.hasPermission("KICK_MEMBERS")) {const embed = new Discord.RichEmbed()
  .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
 .setColor("BLACK")
   .setFooter(bot.user.username, bot.user.avatarURL)
  
message.channel.send(embed)  
  return }

    const members = message.guild.members.filter(member => member.user.presence.game && /(www.|.xyz|discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Oynuyorunda reklam olanlar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Yok!")
        .addField('Kullanıcı adında reklam olanlar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Yok!")
        .setColor("BLACK")
             .setFooter(bot.user.username, bot.user.avatarURL)
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-ara', 'reklamara', 'reklamtaraması'],
    permLevel: 1,
  kategori: 'moderasyon'
}

exports.help = {
    name: 'reklam-taraması',
    description: 'Kullanıcıların oynuyorlarını denetler.',
    usage: 'reklam-taraması'
}