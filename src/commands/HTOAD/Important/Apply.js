const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490' // Lead Dev Role
];
const HTOADApplyEmbed = require('../../../embed/HTOAD/Application/ApplyEmbed.js');


module.exports = {
    structure: new SlashCommandBuilder()
        .setName('apply')
        .setDescription('HTOAD Admin Only(for now).'),
    run: async (client, interaction, args) => {

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADApplyEmbed],
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new StringSelectMenuBuilder()
                                .setCustomId('apply-category')
                                .setPlaceholder(`Roles`)
                                .addOptions(
                                    { label: 'Tester', value: 'htoad-apply-tester'},
                                    { label: 'Translator', value: 'htoad-apply-translator'},
                                    { label: 'Modeler', value: 'htoad-apply-modeler'},
                                    { label: 'Texture Artist', value: 'htoad-apply-texture-artist'},
                                    { label: 'Animator', value: 'htoad-apply-animator'},
                                    { label: 'SFX Artist', value: 'htoad-apply-sfx-artist'},
                                    { label: 'Builder', value: 'htoad-apply-builder'},
                                    { label: 'Concept Artist', value: 'htoad-apply-concept-artist'},
                                    { label: 'Website Coder', value: 'htoad-apply-website-coder'},
                                    { label: 'Discord Bot Coder', value: 'htoad-apply-discord-bot-coder'}
                                )
                        )
                ],
                ephemeral: true
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

