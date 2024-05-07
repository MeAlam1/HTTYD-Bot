/**Description:
 * This button is used to Kick someone from a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-ban-button',
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
        .setTitle('Ban a user from VC')
        .setCustomId('ban-vc-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('Enter the Username or ID of the user!')
                        .setCustomId('ban-vc')
                        .setPlaceholder('Type the username or ID here!(ID works best)')
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
