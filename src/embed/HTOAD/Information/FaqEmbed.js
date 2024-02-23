/**Description:
 * This embed used in the command: /faq
 * src\commands\Public\MinecraftMod\faq.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADFAQEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Frequently Asked Questions')
    .setURL('https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Welcome to How to Own A Dragon. If you have any questions, please check <#1120302121980543007> to see if they have already been answered. Have fun playing!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADFAQEmbed;