const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('show-modal')
        .setDescription('Modal interaction testing.'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
            .setTitle('Modal Example')
            .setCustomId('modal-example')
            .addComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setLabel('What\'s your name?')
                            .setCustomId('name')
                            .setPlaceholder('Type your name here!')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                    )
            );

            if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
                await interaction.showModal(modal);
            } else {
                await interaction.reply({
                    content: 'This command is not available in this server.',
                    ephemeral: true
                });
            }

    }
};