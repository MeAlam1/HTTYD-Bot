const { EmbedBuilder } = require('discord.js');

const HTOADFirstMessageTicketEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Ticket & Support')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setDescription('Click the button below to create a Ticket!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADFirstMessageTicketEmbed;