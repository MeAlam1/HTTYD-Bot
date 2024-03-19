/**Description:
 * This Select is used to view the notes of the user in another server.
 * src\commands\Admin\Notes\Notes.js
 */

const { EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../../schemas/Notes/NotesSchema.js');

module.exports = {
    customId: 'server-notes',
    run: async (client, interaction) => {
        const selectedValue = interaction.values[0];
        const userOption = interaction.values[1];

        const notes = await NoteSchema.find({ userId: userOption.id, selectedValue, isHidden: false }).sort({ createdAt: -1 });

        if (!notes.length) {
            await interaction.reply({ content: `No public notes found for ${userOption.username} in <#${selectedValue}>.`, ephemeral: true });
            return;
        }

        const noteEmbed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`Notes for ${userOption.username}`)
            .setURL(`https://discord.com/users/${userOption.id}`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setThumbnail(userOption.displayAvatarURL({ dynamic: true }));

        let lastModeratorId = null;
        displayedNotes = notes.slice(0, 25);
        
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
                { name: `Created:`, value: discordTimestamp, inline: true }
            );

            noteEmbed.addFields(fieldsToAdd);

            lastModeratorId = note.moderator;
        });
    }
};
