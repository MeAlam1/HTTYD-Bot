/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to add Profanity to the database.
 * ADMIN ONLY COMMAND
 */

const Profanease = require('profanease');
const { SlashCommandBuilder } = require('discord.js');


const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    '1161418815440166943', // Moderator Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('addcurse')
        .setDescription('Add a Profanity Word to the database.')
        .addStringOption(option =>
            option.setName('profanity')
                .setDescription('Profanity to add to the database.')
                .setRequired(true)),
        run: async (client, interaction) => {
            const profanityFilter = new Profanease();

            if (!allowedServers.includes(interaction.guild.id)) {
                await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
                return;
            }

            const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
                
            if (!hasRole) {
                await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
                return;
            }

            const Profanity = interaction.options.getString('profanity');

            try {
                profanityFilter.addWords([Profanity]);
                await interaction.reply({ content: 'Profanity word has been added to the list.', ephemeral: true });
            } catch (error) {
                await interaction.reply({ content: 'An error occurred while adding the profanity word.', ephemeral: true });
                return;
            }

        }
    }            