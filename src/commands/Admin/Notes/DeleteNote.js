/**Servers:
 * How to Own a Dragon
 * Runic isles (Half)
 */

/**Description:
 * This command is used to add a note to a user.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../schemas/Notes/NotesSchema.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1151497491288690688'  // Runic Isles
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    // Runic Isles
    '1214620041425846272', // Bot Coder Role
    '1151500042843201576'  // Owner Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('addnote')
        .setDescription('Delete a note of a user.')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('User to delete the note of.')
                .setRequired(true))
        .addNumberOption(option => 
            option.setName('number')
                .setDescription('Write the Number of the Note you want to Delete.')
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

            const userOption = interaction.options.getUser('user');
            const numberOption = interaction.options.getNumber('number');

            const note = await NoteSchema.findOne({ guildId: interaction.guild.id, userId: userOption.id, guildNoteNumber: numberOption });

            note.isHidden = true;

            await NoteSchema.updateOne({ guildId: interaction.guild.id, userId: userOption.id, guildNoteNumber: numberOption }, note);

            await interaction.reply({ content: `Note ${numberOption} for ${userOption.tag} has been deleted.`, ephemeral: true });

            
        }
    }               