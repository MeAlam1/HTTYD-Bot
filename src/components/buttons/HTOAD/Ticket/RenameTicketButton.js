const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    customId: 'htoad-rename-channel-button',
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
        .setTitle('Channel Name')
        .setCustomId('channel-name-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('Please rename channel!')
                        .setCustomId('channel-name')
                        .setPlaceholder('Type the channel name Here!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
        );

        await interaction.showModal(modal);

    }
};
