/**
 * Description: 
 * This Modal is used to set a user limit on a channel.
 * src\components\buttons\HTOAD\TempVC\LimitButton.js
 */

module.exports = {
    customId: 'vc-limit-modal',
    run: async (client, interaction) => {
        const inputValue = interaction.fields.getTextInputValue('vc-limit');
        let userLimit = parseInt(inputValue, 10);
        if (isNaN(userLimit)) {
            userLimit = 0;
        }

        if (!interaction.guildId || !interaction.channel) {
            await interaction.reply({ content: 'This button can only be used in a server channel.', ephemeral: true });
            return;
        }

        try {
            await interaction.channel.edit({ userLimit: userLimit })
             .then(updatedChannel => {
                 const limitText = userLimit === 0 ? "unlimited" : userLimit;
                 interaction.reply({ content: `The user limit has been set to ${limitText} for this channel by ${interaction.user.tag}.`, ephemeral: false });
             })
             .catch(error => {
                 console.error('Error setting user limit:', error);
                 interaction.reply({ content: 'Failed to set the user limit. I might not have the necessary permissions.', ephemeral: true });
             });
        } catch (error) {
            console.error('Failed to set the user limit:', error);
            await interaction.reply({ content: 'Failed to set the user limit due to an unexpected error.', ephemeral: true });
        }
    }
};
