/**Description: 
 * This Modal is used to edit the Note in the database.
 * src\components\selects\HTOAD\Notes\EditNoteSelect.js
 */

module.exports = {
    customId: 'edit-note-modal', // This is now a prefix
    run: async (client, interaction) => {
        
        const noteType = interaction.customId.split(':')[1];
        const newNoteValue = interaction.fields.getTextInputValue('edit-note-text');

        await interaction.reply({ content: `Note type: ${noteType}, New Value: ${newNoteValue}`, ephemeral: true });
    }
};

