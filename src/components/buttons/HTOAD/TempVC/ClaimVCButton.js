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
                content: 'The owner of the channel is still present. You cannot claim the channel.',
                ephemeral: true
            });
            return;
        }

        try {
            await interaction.channel.permissionOverwrites.create(interaction.member, {
                ManageChannels: true,
            })
            await interaction.reply({ content: 'You have claimed the channel!', ephemeral: true });
        } catch (error) {
            console.error(`Failed to claim the channel: ${error}`);
            await interaction.reply({ content: 'Failed to claim the channel. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
