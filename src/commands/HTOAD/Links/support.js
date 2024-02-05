const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADSupportEmbed = require('../../../components/embed/HTOAD/SupportEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Feel free to support us!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADSupportEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

