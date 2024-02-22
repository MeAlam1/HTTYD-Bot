const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const Runic = [
    '1151585202506838036', // Runic Isles Dev Server
    '1151497491288690688'  // Runic Isles Public Server
];
const RunicETAEmbed = require('../../../embed/Runic/Information/ETAEmbed.js');
const HTOADETAEmbed = require('../../../embed/HTOAD/Information/ETAEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('eta')
        .setDescription('Check when the mod releases!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADETAEmbed]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RunicETAEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
