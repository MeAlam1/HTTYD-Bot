const { EmbedBuilder } = require('discord.js');

const HTOADHelpCategoryEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Help`)
    .setURL('https://discord.com/channels/1120022058601029652/1120026059686019192/1120031106998227054')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .addFields(
        { name: `Category's`, value: `**Links** - All Commands related to links!
    ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADHelpCategoryEmbed;