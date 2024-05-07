/**Description:
 * This button is used to limit a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-limit-button',
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
        .setTitle('VC Limit')
        .setCustomId('vc-limit-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('How many Members can be in your VC max?')
                        .setCustomId('vc-limit')
                        .setPlaceholder('Type a Number between 0-99 Here! 0 = Unlimited')
                        .setStyle(TextInputStyle.Short)
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
