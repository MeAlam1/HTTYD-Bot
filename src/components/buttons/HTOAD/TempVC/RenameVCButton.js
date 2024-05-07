/**Description:
 * This button is used to rename a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-rename-button',
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

        const memberPermissions = interaction.channel.permissionsFor(interaction.member).has(PermissionFlagsBits.ManageChannels);
        if (!memberPermissions) {
            await interaction.reply({
                content: 'You do not have the required permissions to use this command.',
                ephemeral: true
            });
            return;
        }
        await interaction.showModal(modal);

    }
};
