const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474'
];
const HTOADCreateTicketEmbed = require('../../../components/embed/HTOAD/CreateTicketEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ticket')  
        .setDescription('Create a Ticket!'),
    run: async (client, interaction, args) => {

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

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
};

