const ProfanitySchema = require('../../../schemas/Moderation/ProfanitySchema');
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
        .setName('deletecurse')
        .setDescription('Remove a Profanity Word from the database.')
        .addStringOption(option =>
            option.setName('profanity')
                .setDescription('Profanity to remove from the database.')
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

            const words = interaction.options.getString('profanity');

            const knownwords = await ProfanitySchema.findOne({ words: words });

            if (!knownwords) {
                await new ProfanitySchema({
                    ignore: words
                }).save();
            }

            const knownwords2 = await ProfanitySchema.findOne({ ignore: words });

            if (knownwords2) {
                await interaction.reply({ content: 'Word is already removed from database.', ephemeral: true });
                return;
            }

            await ProfanitySchema.deleteOne({ words: words });

            await interaction.reply({ content: `Word removed to the database.
${words}`, ephemeral: true });
        }

        }          