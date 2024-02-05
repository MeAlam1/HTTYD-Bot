const { SlashCommandBuilder } = require('discord.js');
const GoogleDriveEmbed = require('../../../components/embed/General/GoogleDriveEmbed.js');
const HTOAD = ['1120022058601029652'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('httyd')
        .setDescription('To open the Google Drive!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [GoogleDriveEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};