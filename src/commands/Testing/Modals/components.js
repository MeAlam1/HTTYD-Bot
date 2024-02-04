const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('components')
        .setDescription('Test the components handler.'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'Select one of the components below.',
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('example-button')
                                .setLabel('Example Button')
                                .setStyle(1)
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
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }

    }
};