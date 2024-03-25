/**Servers:
 * How to Own a Dragon
 * Runic isles
 */

/**Description:
 * This command is used to add a link to the known phishing links database.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder } = require('discord.js');
const KnownLinkSchema = require('../../../schemas/Moderation/KnownLinkSchema.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1151497491288690688'  // Runic Isles
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    '1161418815440166943', // Moderator Role
    // Runic Isles
    '1214620041425846272', // Bot Coder Role
    '1151500042843201576', // Owner Role
    '1189510610556301332', // Management Role
    '1203303940364439573', // Moderator Role
    '1151500178331807896'  // Developer Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('addlink')
        .setDescription('Add a known phishing link to the database.')
        .addStringOption(option =>
            option.setName('link')
                .setDescription('Link to add to the database.')
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

            const link = interaction.options.getString('link');

            const knownLink = await KnownLinkSchema.findOne({ link: link });

            if (knownLink) {
                await interaction.reply({ content: 'This link is already in the database.', ephemeral: true });
                return;
            }

            await new KnownLinkSchema({
                link: link
            }).save();

            await interaction.reply({ content: `Link added to the database.
${link}`, ephemeral: true });
        }
    }            