// DO NOT MODIFY THIS FILE! (Copy is allowed)

/**Servers:
 * How to Own a Dragon
 * HTOAD Test
 */

/**Description:
 * This is an example of a Ban Command.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder } = require('discord.js');
const HTOAD = ['1220718825507389461']; // HTOAD Test
const allowedRoles = [
    '1120030006626750474', // How to Own a Dragon Owner Role
    '1133420066277437490', // How to Own a Dragon Lead Dev Role
    '1140629154748956813', // How to Own a Dragon Coder Role
    '1220718826149118034' // HTOAD Test Owner Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user from the server.')
        .addUserOption(option => 
            option.setName('target')
                .setDescription('Select a user to ban')
                .setRequired(true)
        )
        .addStringOption(option => 
            option.setName('reason')
                .setDescription('Reason for the ban')
                .setRequired(false)
        ),
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

        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided.';

        try {
            await interaction.guild.members.ban(target, { reason: reason });
            await interaction.reply({
                content: `Successfully banned ${target.tag} for reason: ${reason}`,
                ephemeral: true
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'An error occurred while trying to ban the user.',
                ephemeral: true
            });
        }
    }
};