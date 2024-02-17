const { ModalSubmitInteraction } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'channel-name-modal',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */
    run: async (client, interaction) => {
        const newChannelName = interaction.fields.getTextInputValue('channel-name');

        if (!interaction.guildId || !interaction.channel) {
            await interaction.reply({ content: 'This command can only be used in a server channel.', ephemeral: true });
            return;
        }

        try {
            await interaction.channel.setName(newChannelName);
            
            await interaction.reply({ content: `The channel name has been changed to ${newChannelName}.`, ephemeral: false });
        } catch (error) {
            console.error('Failed to rename the channel:', error);
            await interaction.reply({ content: 'Failed to change the channel name. I might not have the necessary permissions.', ephemeral: true });
        }
    }
};
