/**Description:
 * This embed used in the command: /ticket
 * src\commands\Admin\Ticket\CreateTicket.js
 * ADMIN ONLY Command
 */

const { EmbedBuilder } = require('discord.js');

const HTOADCreateTicketEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Ticket & Support')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setDescription('Click the button below to create a Ticket!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADCreateTicketEmbed;