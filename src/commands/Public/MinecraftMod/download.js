/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command will send direct you to the cursforge.
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADDownloadEmbed = require('../../../embed/HTOAD/Information/DownloadEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('download')
        .setDescription('to go to the download page of the mod!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADDownloadEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

