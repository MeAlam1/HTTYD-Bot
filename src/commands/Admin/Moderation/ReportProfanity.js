/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to Remove Profanity from the database.
 * ADMIN ONLY COMMAND
 */

const profanityFilter = require('../../../functions/profanityFilter.js');
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
        .setName('reportcurse')
        .setDescription('Report a Profanity Word to the Staff.')
        .addStringOption(option =>
            option.setName('profanity')
                .setDescription('Profanity to report.')
                .setRequired(true)),
        run: async (client, interaction) => {

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
                const ChannelId = '1168633539676344490';
                const Channel = interaction.guild.channels.cache.get(ChannelId);
                Channel.send(`Profanity Word: ${Profanity} has been reported by ${interaction.user.tag}`);
                await interaction.reply({ content: 'Profanity word has been Reported to the Staff.', ephemeral: true });
            } catch (error) {
                await interaction.reply({ content: 'An error occurred while Reporting the profanity word.', ephemeral: true });
                return;
            }

        }
    }            