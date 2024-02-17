const { EmbedBuilder } = require('discord.js');

const HTOADHelpLinksEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1120022058601029652/1182345490101186711/1182346235907149854')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .addFields(
        { name: `Mod`, value: `
        **[/eta](https://www.curseforge.com/minecraft/mc-mods/how-to-own-a-dragon/files/all?page=1&pageSize=20)** - We already released the First Alpha!
        **[/support](https://ko-fi.com/htoad)** - Feel free to support us!
        **[/faq](https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583)** - Please read the FAQ before asking Questions!
        `},
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADHelpLinksEmbed;