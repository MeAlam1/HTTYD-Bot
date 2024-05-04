/**Description: 
 * This Modal is used to rename a channel.
 * src\components\buttons\HTOAD\Ticket\RenameTicketButton.js
 * src\components\buttons\HTOAD\TempVC\RenameButton.js
 */

module.exports = {
    customId: 'channel-name-modal',
    run: async (client, interaction) => {
        const newChannelName = interaction.fields.getTextInputValue('channel-name');

        if (!interaction.guildId || !interaction.channel) {
            await interaction.reply({ content: 'This Button can only be used in a server channel.', ephemeral: true });
            return;
        }

        try {
            await interaction.channel.setName(newChannelName);
            
            await interaction.reply({ content: `The channel name has been changed to ${newChannelName} by ${interaction.user}.`, ephemeral: false });
        } catch (error) {
            console.error('Failed to rename the channel:', error);

            await interaction.reply({ content: 'Failed to change the channel name. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
