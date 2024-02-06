const { ButtonBuilder, ButtonStyle } = require('discord.js');

const CloseTicketButton = new ButtonBuilder()
    .setCustomId('close-ticket')
    .setLabel('Close Ticket')
    .setStyle(ButtonStyle.Danger);

module.exports = CloseTicketButton;
