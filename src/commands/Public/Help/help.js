const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const Runic = [
    '1151585202506838036', // Runic Isles Dev Server
    '1151497491288690688'  // Runic Isles Public Server
];
const Ravenstone = ['1150598668219588701'];
const HTOADHelpCategoryEmbed = require('../../../embed/HTOAD/Help/HelpCategoryEmbed.js');
const RunicHelpCategoryEmbed = require('../../../embed/Runic/Help/HelpCategoryEmbed.js');
const RavenstoneHelpCategoryEmbed = require('../../../embed/Ravenstone/HelpCategoryEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('help')
        .setDescription('check all available commands in this server!'),
    run: async (client, interaction) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADHelpCategoryEmbed],
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId('help-category')
                                .setPlaceholder(`Category's`)
                                .addOptions(
                                    { label: 'Links', value: 'htoad-help-category-links'},
                                    { label: 'Mod', value: 'htoad-help-category-mod'}
                                )
                        )
                ]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RunicHelpCategoryEmbed],
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId('help-category')
                                .setPlaceholder(`Category's`)
                                .addOptions(
                                    { label: 'Links', value: 'runic-help-category-links'},
                                )
                        )
                ]
            });
        } else if (interaction.guild && Ravenstone.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RavenstoneHelpCategoryEmbed],
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
