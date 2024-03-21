// DO NOT MODIFY THIS FILE! (Copy is allowed)

/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This is an example of a Modal Command to Copy Paste.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Dragon Lead Dev Role
    '1140629154748956813'  // Coder Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('show-modal')
        .setDescription('Modal interaction testing.'),
    run: async (client, interaction) => {
        
        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
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
