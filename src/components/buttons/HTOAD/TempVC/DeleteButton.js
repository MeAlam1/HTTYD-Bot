/**Description:
 * This button is used to delete a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const {PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-delete-button',
    run: async (client, interaction) => {

        const memberPermissions = interaction.channel.permissionsFor(interaction.member).has(PermissionFlagsBits.ManageChannels);
        if (!memberPermissions) {
            await interaction.reply({
                content: 'You do not have the required permissions to use this command.',
                ephemeral: true
            });
            return;
        }
        await interaction.channel.delete();

    }
};
