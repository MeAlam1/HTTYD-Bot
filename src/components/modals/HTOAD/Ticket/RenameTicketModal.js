/**Description: 
 * This Modal is used to rename the channel.
 * src\components\buttons\HTOAD\Ticket\RenameTicketButton.js
 */

module.exports = {
    customId: 'channel-name-modal',
    run: async (client, interaction) => {
        // The new channel name.
        const newChannelName = interaction.fields.getTextInputValue('channel-name');

        if (!interaction.guildId || !interaction.channel) {
            // If the command is used in a DM.
            await interaction.reply({ content: 'This command can only be used in a server channel.', ephemeral: true });
            return;
        }

        try {
            // To rename the channel.
            await interaction.channel.setName(newChannelName);
            
            // If the channel name has been successfully changed.
            await interaction.reply({ content: `The channel name has been changed to ${newChannelName} by ${interaction.user}.`, ephemeral: false });
        } catch (error) {
            console.error('Failed to rename the channel:', error);

            // If the channel name has not been successfully changed.
            await interaction.reply({ content: 'Failed to change the channel name. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
