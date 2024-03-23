/**Description: 
 * This Modal is used to edit the Note in the database.
 * src\components\selects\HTOAD\Notes\EditNoteSelect.js
 */

const tempStorage = {};

module.exports = {
    customId: 'edit-note-modal',
    run: async (client, interaction) => {
        const uniqueKeyPattern = 'edit-note';
        const matches = interaction.customId.match(uniqueKeyPattern);
        if (!matches) {
            await interaction.reply({ content: 'An error occurred. Please try again.', ephemeral: true });
            return;
        }
        const uniqueKey = matches[1];
        const noteType = tempStorage[uniqueKey];
        
        interaction.reply({ content: `Note: ${noteType}, Key: ${tempStorage[uniqueKey]}`, ephemeral: true });

        if (!noteType) {
            await interaction.reply({ content: 'Failed to retrieve note type.', ephemeral: true });
            return;
        }

        const newNoteValue = interaction.fields.getTextInputValue('edit-note-text');

        await interaction.reply({ content: `The ${noteType} note has been updated.`, ephemeral: true });

        delete tempStorage[uniqueKey];
    }
};

