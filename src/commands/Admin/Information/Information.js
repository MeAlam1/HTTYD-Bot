/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to display the information for How to Own a Dragon.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490' // Lead Dev Role
];
const HTOADInformationEmbed = require('../../../embed/HTOAD/Information/InfoEmbed.js');


module.exports = {
    structure: new SlashCommandBuilder()
        .setName('info')
        .setDescription('HTOAD Admin Only.'),
    run: async (client, interaction, args) => {

        // The FAQ Button
        const FaqButton = new ButtonBuilder()
         .setCustomId('htoad-faq-button')
         .setLabel('FAQ')
         .setStyle(ButtonStyle.Primary);

         // The Rules Button
        const RulesButton = new ButtonBuilder()
         .setCustomId('htoad-rules-button')
         .setLabel('Rules')
         .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder().addComponents(FaqButton, RulesButton);

        // To check if the user has the necessary permissions to use this command.
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({
                // Reply if the user does not have the necessary permissions to use this command.
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                // To send the Information Embed.
                embeds: [HTOADInformationEmbed],
                components: [row]
            });
        } else {
            await interaction.reply({
                // This command is not available in this server.
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

