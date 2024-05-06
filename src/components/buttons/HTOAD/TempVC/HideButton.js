/**Description:
 * This button is used to hide a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-hide-button',
    run: async (client, interaction) => {

        const memberPermissions = interaction.channel.permissionsFor(interaction.member).has(PermissionFlagsBits.ManageChannels);
        if (!memberPermissions) {
            await interaction.reply({
                content: 'You do not have the required permissions to use this command.',
                ephemeral: true
            });
            return;
        }

        try {
            const dragons = '1133457569155920033';
            const role = interaction.guild.roles.cache.get(dragons);
            await interaction.channel.permissionOverwrites.create(role, {
                ViewChannel: false,
              })
            await interaction.reply({ content: 'The channel has been hidden.', ephemeral: true });
        } catch (error) {
            console.error('Failed to hide the channel:', error);
            await interaction.reply({ content: 'Failed to hide the channel. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
