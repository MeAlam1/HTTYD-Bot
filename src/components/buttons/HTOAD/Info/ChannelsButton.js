/**Description:
 * This is an button to display the Channels!
 * src\embed\HTOAD\Information\ChannelsEmbed.js
 * src\commands\Admin\Information\Information.js
 */

const ChannelsEmbed = require('../../../../embed/HTOAD/Information/ChannelsEmbed.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'htoad-channels-button',
    run: async (client, interaction) => {
        await interaction.reply({ embeds: [ChannelsEmbed], components: [
            new ActionRowBuilder
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('htoad-archive-button')
                        .setLabel('Archive')
                        .setStyle(ButtonStyle.Primary)
                )
        ], ephemeral: true});
    }
};