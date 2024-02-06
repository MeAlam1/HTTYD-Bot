const { EmbedBuilder } = require('discord.js');
const ChannelName = require('../../../buttons/HTOAD/CreateTicketButton.js');

const HTOADCloseTicketEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Transcript')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setDescription(`The Transcript will be named: **${ChannelName}**`)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADCloseTicketEmbed;
