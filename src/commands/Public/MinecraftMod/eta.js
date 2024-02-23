/**Servers:
 * How to Own a Dragon
 * Runic Isles Public Server
 */

/**Description:
 * This command is used to check the ETA of the mod.
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const Runic = ['1151497491288690688']; // Runic Isles Public Server
const RunicETAEmbed = require('../../../embed/Runic/Information/ETAEmbed.js');
const HTOADETAEmbed = require('../../../embed/HTOAD/Information/ETAEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('eta')
        .setDescription('Check when the mod releases!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            // How to Own a Dragon
            await interaction.reply({
                embeds: [HTOADETAEmbed]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            // Runic Isles Public Server
            await interaction.reply({
                embeds: [RunicETAEmbed]
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
