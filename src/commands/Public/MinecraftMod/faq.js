/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command will send the FAQ Embed.
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADFAQEmbed = require('../../../embed/HTOAD/Information/FaqEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Please read the FAQ before asking questions!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            // How to Own a Dragon
            await interaction.reply({
                embeds: [HTOADFAQEmbed]
            });
        } else {
            await interaction.reply({
                // This command is not available in this server.
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

