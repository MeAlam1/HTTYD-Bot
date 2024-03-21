/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 * ADMIN ONLY Command
 */

const { EmbedBuilder } = require('discord.js');

const HTOADInformationEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Welcome to How to Own a Dragon!')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')  
    .addFields(
        { name: '\u200B', value: `
        This server is a Minecraft Mod and a How to Train your Dragon Community!
        This Discord Community is for all the fans of the How to Train your Dragon Universe(Movies, Series, Specials, Games, and all other related media).
        ` },
        { name: '\u200B', value: `
        The server is a place for the fans of the Minecraft Mod How to Own a Dragon to come together and discuss the mod, share their experiences, and help each other out.
        ` },
        { name: '\u200B', value: `
        Our server is also a place for all the fans to come together and share their love for the franchise. We are a friendly and welcoming community and we hope you enjoy your time here.
        ` },
        { name: '\u200B', value: `
        For any Questions, Suggestions, or Feedback, please feel free to contact the Staff by pressing the "Contact Staff" button below. 
        This will create a ticket for you to talk to the staff. A staff member will be with you as soon as possible. Please provide as much information as possible so we can help you as quickly as possible.
        ` },
        { name: '\u200B', value: `
        This is a fan project Mod! We are not associated with Universal, Dreamworks or How to Train your Dragon.
        ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADInformationEmbed;