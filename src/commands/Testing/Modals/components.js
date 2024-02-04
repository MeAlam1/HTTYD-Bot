const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];
const allowedRoles = ['1120030006626750474', '1133420066277437490'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('components')
        .setDescription('Test the components handler.'),
    run: async (client, interaction) => {
        if (!interaction.guild || !HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
            return;
        }
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        await interaction.reply({
            content: 'Select one of the components below.',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('example-button')
                            .setLabel('Example Button')
                            .setStyle(ButtonStyle.Primary)
                    ),
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('example-select')
                            .setPlaceholder('Example Select menu')
                            .addOptions(
                                { label: 'Option 1', value: 'option 1' },
                                { label: 'Option 2', value: 'option 2' },
                                { label: 'Option 3', value: 'option 3' },
                            )
                    )
            ]
        });
    }
};
