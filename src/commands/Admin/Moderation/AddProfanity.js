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
        .setName('addcurse')
        .setDescription('Add a Profanity Word to the database.')
        .addStringOption(option =>
            option.setName('profanity')
                .setDescription('Profanity to add to the database.')
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

            const knownwords = await ProfanitySchema.findOne({ ignore: words });

            if (knownwords) {
                await ProfanitySchema.deleteOne({ ignore: words });
            }

            const knownwords2 = await ProfanitySchema.findOne({ ignore: words });

            if (knownwords2) {
                await interaction.reply({ content: 'Word already in the database.', ephemeral: true });
                return;
            }

            await new ProfanitySchema({
                words: words
            }).save();

            await interaction.reply({ content: `Word added to the database.
${words}`, ephemeral: true });
        }

        }          