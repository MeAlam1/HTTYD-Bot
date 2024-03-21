/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to send the support embed.
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
];

const HTOADSupportEmbed = require('../../../HTOAD/embeds/Information/SupportEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Feel free to support us!'),
    run: async (client, interaction, args) => {
        
        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADSupportEmbed]
            });
        }
    }
};

