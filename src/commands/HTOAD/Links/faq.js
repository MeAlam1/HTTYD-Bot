const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADFAQEmbed = require('../../../components/embed/HTOAD/FaqEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Please read the FAQ before asking questions!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADFAQEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

