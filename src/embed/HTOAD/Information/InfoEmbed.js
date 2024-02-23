/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 * ADMIN ONLY Command
 */

const { EmbedBuilder } = require('discord.js');

const HTOADInformationEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Server Information')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')  
    .setDescription('Description goes here!')
    .addFields(
        { name: 'Subtitle goes here', value: `Personal message goes here` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADInformationEmbed;