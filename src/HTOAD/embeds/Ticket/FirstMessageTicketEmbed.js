/**Description:
 * This embed used after you create a ticket.
 * src\HTOAD\buttons\Ticket\CreateTicketButton.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADFirstMessageTicketEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Ticket & Support')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setDescription(`
    Welcome!
    Our Moderators are on their way and will be here shortly to provide assistance. 
    We appreciate your patience and will be with you as soon as possible.
    `)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADFirstMessageTicketEmbed;