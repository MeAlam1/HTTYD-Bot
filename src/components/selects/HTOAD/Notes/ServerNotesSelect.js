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
    console.log(`Selected Value: ${selectedValue}`);
    
    }
};
