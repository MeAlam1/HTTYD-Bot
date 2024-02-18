const { EmbedBuilder } = require('discord.js');

const HTOADApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Apply`)
    .setURL('https://discord.com/channels/1120022058601029652/1120026059686019192/1120031106998227054')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .addFields(
        { name: `Which role would you like to have in our team?`, value: `
        **Tester**
        **Translator**
        **Modeler**
        **Texture Artist**
        **Animator**
        **SFX Artist**
        **Builder**
        **Concept Artist**
        **Website Coder**
        **Discord Bot Coder**
    ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADApplyEmbed;