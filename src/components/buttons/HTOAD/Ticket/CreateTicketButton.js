/**Description:
 * This button is used to create a ticket.
 * src\commands\Admin\Ticket\CreateTicket.js
 * ADMIN ONLY Command
 */

const { ChannelType, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const HTOADFirstMessageTicketEmbed = require('../../../../embed/HTOAD/Ticket/FirstMessageTicketEmbed.js');

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
                {
                    id: '1133420066277437490', // Lead Dev
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                }, 
                {
                    id: '1161418815440166943', // Moderator
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                },
            ],
        }).then(channel => {
            interaction.reply({

                // The message that gets sent when they create a ticket. (only they can see it)
                content: `Your ticket has been created! <#${channel.id}>`,
                ephemeral: true
            });

            // The Button to Close the Ticket
            const CloseTicketButton = new ButtonBuilder()
             .setCustomId('close-ticket-button')
             .setLabel('Close Ticket')
             .setStyle(ButtonStyle.Danger);

            // The Button to Rename the Transcript
             const RenameTranscriptButton = new ButtonBuilder()
             .setCustomId('htoad-rename-channel-button')
             .setLabel('Rename Channel')
             .setStyle(ButtonStyle.Danger);


            const row = new ActionRowBuilder().addComponents(CloseTicketButton, RenameTranscriptButton);

            // The First message in the ticket that gets created. The message also gets pinned.
            channel.send({
                embeds: [HTOADFirstMessageTicketEmbed],
                content: `<@&1161418815440166943>`,
                components: [row]
            })
              .then(message => message.pin())
              .catch(console.error);
              
        }).catch(console.error);
    }
};
