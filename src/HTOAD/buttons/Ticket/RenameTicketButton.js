/**Description:
 * This button is used to rename the channel.
 * src\HTOAD\buttons\Ticket\CreateTicketButton.js
 */

const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const allowedRoles = [
    //How to Own a Dragon
    '1120030006626750474', //Owner Role
    '1133420066277437490', //Lead Dev Role
    '1161418815440166943', //Moderator Role
];



module.exports = {
    customId: 'htoad-rename-channel-button',
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
        .setTitle('Channel Name')
        .setCustomId('channel-name-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('Please rename channel!')
                        .setCustomId('channel-name')
                        .setPlaceholder('Type the channel name Here!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
        );

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        await interaction.showModal(modal);

    }
};
