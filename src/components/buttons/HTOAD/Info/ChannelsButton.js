const ChannelsEmbed = require('../../../../embed/HTOAD/Information/ChannelsEmbed.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'htoad-channels-button',
    run: async (client, interaction) => {
        const archiveRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('htoad-archive-button')
                    .setLabel('Archive')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({ 
            embeds: [ChannelsEmbed], 
            components: [archiveRow],
            ephemeral: true
        });
    }
};
