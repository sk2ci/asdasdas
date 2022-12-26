const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
    .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **TR**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)
    .addField(
      `Bot`,
      `\`bot-bilgi\`, \`yapımcılar\`, \`davet\`, \`yardım\`, \`üye-durum\`, \`ping\`, \`prefix\`, \`prefix-sıfırla\`, \`destek-sunucu\``
    )
    .addField(`Premium`, `\`pre-günlük\`, \`pre-puan\`, \`pre-market\``)
    .addField(
      `Moderasyon`,
      `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`rol-al\`, \`rol-ver\`, \`reklam-taraması\`, \`slowmode\`, \`temizle\``
    )
    .addField(
      `Sistem`,
      `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`sayaç-mesaj-hg\`, \`sayaç-mesaj-bb\`, \`sayaç-mesaj-sıfırla\`, \`ever-engel\`, \`sa-as\`, \`reklam-engel\`, \`ototag\`, \`ototag-isim\`, \`ototag-sıfırla\`, \`hg-bb\``
    )
    .addField(
      `Sistem2`,
      `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`kanal-koruma\`, \`kanal-koruma-sıfırla\``
    )

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
