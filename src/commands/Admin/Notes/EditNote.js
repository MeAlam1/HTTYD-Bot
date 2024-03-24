/**Servers:
 * How to Own a Dragon
 * Runic isles (Half)
 */

/**Description:
 * This command is used to edit a note of a user.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../schemas/Notes/NotesSchema.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
];

const allowedRoles = [
    // How to Own a Dragon 
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    // Runic Isles
    '1214620041425846272', // Runic Bot Coder Role
    '1151500042843201576'  // Runic Owner Role
];

let displayedNotes = notes.slice(0, 25);
        
        displayedNotes.forEach((note, index) => {
            const discordTimestamp = `<t:${Math.floor(new Date(note.createdAt).getTime() / 1000)}:R>`;
            const noteContent = note.note.length > 1020 ? note.note.substring(0, 1020) + '...' : note.note;
            const isSameModeratorAsPrevious = note.moderatorId === lastModeratorId;

            const fieldsToAdd = [];

            if (!isSameModeratorAsPrevious) {
                fieldsToAdd.push({ name: `Moderator:`, value: `<@${note.moderatorId}>`, inline: false });
            }

            fieldsToAdd.push(
                { name: `Note ${index + 1}`, value: noteContent },
                { name: `Rule Broken:`, value: note.ruleBroken },
                { name: `Punishment:`, value: note.punishment },
                { name: `Created:`, value: discordTimestamp, inline: true }
            );

            noteEmbed.addFields(fieldsToAdd);

            lastModeratorId = note.moderator;
        });

        const selectOptions = displayedNotes.map((note, index) => ({
            label: `Note ${index + 1}`,
            description: `Select to view details about Note ${index + 1}`,
            value: `note_${index + 1}`,
        }));

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('editnote')
        .setDescription('edit a note about a user.')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('User to edit the note for.')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('note')
                .setDescription('Select which note to edit.')
                .setRequired(true)
                .setChoices(selectOptions)),
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

        const { options } = interaction;

        const userOption = options.getUser('user');
    }
}               