/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command will send the FAQ Embed.
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
];

const HTOADFAQEmbed = require('../../../HTOAD/embeds/Information/FaqEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Please read the FAQ before asking questions!'),
    run: async (client, interaction, args) => {
        
        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADFAQEmbed]
            });
        }
    }
};

