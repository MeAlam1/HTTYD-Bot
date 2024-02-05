// Testing The new:
// Help Function

const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652'];
const Runic = ['1151585202506838036', '1203659334177792080', '1151497491288690688']
const HTOADHelpCategoryEmbed = require('../../../components/embed/HTOAD/HelpCategoryEmbed.js');
const RunicHelpCategoryEmbed = require('../../../components/embed/Runic/HelpCategoryEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test'),
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
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
