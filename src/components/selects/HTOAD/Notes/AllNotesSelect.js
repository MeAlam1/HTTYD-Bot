/**Description:
 * This Select is used to check which note you want to see in detail.
 * src\commands\Admin\Notes\Notes.js
 * src\components\selects\HTOAD\Notes\ServerNotesSelect.js
 */

const { EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../../schemas/Notes/NotesSchema.js');

module.exports = {
    customId: 'all-notes',
    run: async (client, interaction) => {


        
        const selectedValue = interaction.values[0];
        const guildNoteNumber = selectedValue.split('_')[1];

        console.log(`Selected Value: ${selectedValue}`);
        console.log(`Extracted guildNoteNumber: ${guildNoteNumber}`);

        const selectedNote = await NoteSchema.findOne({ guildNoteNumber: guildNoteNumber });

        const moderatorId = selectedNote.moderatorId;
        const userId = selectedNote.userId;

        console.log(selectedNote); 

        if (!selectedNote) {
            await interaction.reply({ content: "Note not found.", ephemeral: true });
            return;
        }

        const user = await client.users.fetch(userId);
        const moderator = await client.users.fetch(moderatorId);

        const noteDetailsEmbed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`Notes for ${user.username}`) 
            .setURL(`https://discord.com/users/${userId}`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
            .addFields(
                { name: 'Moderator', value: `<@${moderatorId}>`, inline: true },
                { name: 'User', value: `<@${userId}>`, inline: true },
                { name: 'Note Type', value: selectedNote.type, inline: true },
                { name: 'Status', value: selectedNote.status, inline: true },
                { name: 'Visibility', value: selectedNote.visibility, inline: true },
                { name: 'DM User', value: selectedNote.dmNotification ? 'Yes' : 'No', inline: true },
                { name: 'Created At', value: selectedNote.createdAt, inline: true }, 
                { name: 'Note', value: selectedNote.note },
            )
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        if (selectedNote.attachments.length > 0) {
            noteDetailsEmbed.setImage(selectedNote.attachments[0]);
        }

        await interaction.reply({ embeds: [noteDetailsEmbed] });
    }
};
