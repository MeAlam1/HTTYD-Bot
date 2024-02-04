const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];
const allowedRoles = ['1120030006626750474', '1133420066277437490'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('show-modal')
        .setDescription('Modal interaction testing.'),
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

        await interaction.showModal(modal);
    }
};
