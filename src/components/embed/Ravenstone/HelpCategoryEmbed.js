const { EmbedBuilder } = require('discord.js');

const RavenstoneHelpCategoryEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Help`)
    .setURL('https://discord.com/channels/1120022058601029652/1120026059686019192/1120031106998227054')
    .setAuthor({ name: 'Ravenstone Peak', iconURL: 'https://imgur.com/pbtKUuf.png'})
    .setImage('https://imgur.com/W1koL7J.png')
    .addFields(
        { name: `Category's`, value: `
    ` },
    )
    .setTimestamp()
    .setFooter({ text: 'Ravenstone Peak Coder', iconURL: 'https://imgur.com/pbtKUuf.png' });

module.exports = RavenstoneHelpCategoryEmbed;