/**Description: 
 * This Modal is used to edit the Note in the database.
 * src\components\selects\HTOAD\Notes\EditNoteSelect.js
 */

const AllNotesSelect = require('../../../selects/HTOAD/Notes/AllNotesSelect.js')

module.exports = {
    customId: 'edit-note-modal',
    run: async (client, interaction) => {
        const newNoteValue = interaction.fields.getTextInputValue('edit-note-text');

        await interaction.reply({ content: `${AllNotesSelect.selectedValue}`, ephemeral: true });


    }
};
