/**Description:
 * This button is used to claim a Temp VC!
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { PermissionFlagsBits } = require('discord.js');
    
module.exports = {
    customId: 'htoad-claim-button',
    run: async (client, interaction) => {

        const memberPermissions = interaction.channel.members.find(member => {
            return member.permissionsIn(interaction.channel).has(PermissionFlagsBits.ManageChannels);
          });

        if (memberPermissions) {
            await interaction.reply({
                content: 'You do not have the required permissions to use this command.',
                ephemeral: true
            });
            return;
        }

        try {
            await interaction.channel.permissionOverwrites.create(interaction.member, {
                ManageChannels: true,
            })
            await interaction.reply({ content: 'The channel has been hidden.', ephemeral: true });
        } catch (error) {
            console.error('Failed to hide the channel:', error);
            await interaction.reply({ content: 'Failed to hide the channel. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
