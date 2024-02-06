const { ChannelType, PermissionFlagsBits, ActionRowBuilder } = require('discord.js');
const HTOADFirstMessageTicketEmbed = require('../../embed/HTOAD/Ticket/FirstMessageTicketEmbed.js');

const CloseTicketButton = new ButtonBuilder()
.setCustomId('close-ticket-button')
.setLabel('Close Ticket')
.setStyle(ButtonStyle.Danger);


const row = new ActionRowBuilder().addComponents(CloseTicketButton);

module.exports = {
    customId: 'htoad-create-ticket-button',
    run: async (client, interaction) => {
        // How to Own a Dragon
        const categoryId = '1126638959716470886'; // Ticket Category
        const channelName = `ticket-${interaction.user.username.replace(/\s+/g, '-').toLowerCase()}`;

        interaction.guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
            parent: categoryId, 
            permissionOverwrites: [
                {
                    id: interaction.user.id, // User that Creates the Ticket
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages], 
                },
                {
                    id: interaction.guild.roles.everyone, // Everyone
                    deny: [PermissionFlagsBits.ViewChannel],
                },
                /**{
                    id: '1133420066277437490', // Lead Dev
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                }, 
                {
                    id: '1161418815440166943', // Moderator
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                }, */
            ],
        }).then(channel => {
            interaction.reply({
                content: `Your ticket has been created! <#${channel.id}>`,
                ephemeral: true
            });

            channel.send({
                embeds: [HTOADFirstMessageTicketEmbed],
                components: [row],
            })
              .then(message => message.pin())
              .catch(console.error);
              
        }).catch(console.error);
    }
};
