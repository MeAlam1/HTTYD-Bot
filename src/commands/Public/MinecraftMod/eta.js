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

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
    '1151497491288690688'  // Runic Isles Server
];

const RunicETAEmbed = require('../../../Runic/embeds/Information/ETAEmbed.js');
const HTOADETAEmbed = require('../../../HTOAD/embeds/Information/ETAEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('eta')
        .setDescription('Check when the mod releases!'),
    run: async (client, interaction, args) => {

        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADETAEmbed]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RunicETAEmbed]
            });
        }
    }
};
