const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const allowedGuildId = '1120022058601029652'; // Ensure this is the ID of your specific guild

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Tell people for the 4th time in a row to read #faq'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {[]} args 
     */
    run: async (client, interaction, args) => {
        if (interaction.guild && interaction.guild.id === allowedGuildId) {
            await interaction.reply({
                content: 'Welcome to How to Own A Dragon. If you have any questions, please check <#1120302121980543007> to see if they have already been answered. Have fun playing!'
            });
        } else {
            // Since this is a guild-specific command, this else branch might never get executed if the command is not registered in other guilds.
            // If you still need to handle it, use interaction.reply or interaction.followUp depending on the context.
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
