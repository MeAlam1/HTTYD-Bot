/**Description:
 * This embed used in the command: /faq en /info
 * src\commands\Public\MinecraftMod\faq.js
 * src\components\selects\HTOAD\Information\FaqSelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADFAQEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Frequently Asked Questions')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Welcome to How to Own A Dragon. Please select which part of the FAQ you would like to view.')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADFAQEmbed;