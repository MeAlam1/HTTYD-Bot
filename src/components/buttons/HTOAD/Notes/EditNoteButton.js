/**Description:
 * This button is used to edit a note
 * src\components\selects\HTOAD\Notes\AllNotesSelect.js
 */

module.exports = {
    customId: `edit-note-button`, 
    run: async (client, interaction) => {
        await interaction.reply({ content: 'Edit Note Button Clicked!', ephemeral: true });
    }
};
