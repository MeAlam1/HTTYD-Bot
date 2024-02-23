/**Description:
 * This embed used when the admin closes the ticket.
 * ssrc\components\buttons\HTOAD\Ticket\CloseTicketButton.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADCloseTicketEmbed = new EmbedBuilder()
.setColor(0x0099FF)
.setTitle(`**${interaction.channel.name}**`)
.setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
.setDescription(`The title of this Embed will be the name of the Transcript!`)
.setTimestamp()
.setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADCloseTicketEmbed;