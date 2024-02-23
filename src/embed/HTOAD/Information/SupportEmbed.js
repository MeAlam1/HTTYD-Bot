/**Description:
 * This embed used in the command: /support
 * src\commands\Public\MinecraftMod\support.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADSupportEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Support')
    .setURL('https://ko-fi.com/htoad')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Here are the different platforms where you can Officially Support us!')
    .addFields(
        { name: 'Links', value: `**[Ko-Fi](https://ko-fi.com/htoad)** - To open the Ko-Fi page!
        **[Patreon](https://www.patreon.com/htoad)** - To open the Patreon page!
        
        `},)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADSupportEmbed;