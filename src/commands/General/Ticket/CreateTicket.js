const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const allowedServers = ['1120022058601029652']; // How to Own a Dragon
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474' // Owner Role
];
const HTOADCreateTicketEmbed = require('../../../components/embed/HTOAD/Ticket/CreateTicketEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ticket')  
        .setDescription('Create a Ticket!'),
    run: async (client, interaction, args) => {

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!interaction.guild || !allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
            return;
        }

        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADCreateTicketEmbed],
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('create-ticket-button')
                                .setEmoji('<a:Toothless_Dance:1204207905365164032>')
                                .setLabel('Create a Ticket!')
                                .setStyle(ButtonStyle.Primary)
                        ),
                ]
            });
        }
    }
};

