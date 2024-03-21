/**Description:
 * This command will send the Google Drive link/Embed.
 */

const { SlashCommandBuilder } = require('discord.js');
const GoogleDriveEmbed = require('../../../HTOAD/embeds/GoogleDriveEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('httyd')
        .setDescription('To open the Google Drive!'),
    run: async (client, interaction, args) => {
            await interaction.reply({
                embeds: [GoogleDriveEmbed]
            });
    }
};