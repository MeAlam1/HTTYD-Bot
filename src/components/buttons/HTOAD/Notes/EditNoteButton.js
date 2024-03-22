/**Description:
 * This button is used to edit a note
 * src\components\selects\HTOAD\Notes\AllNotesSelect.js
 */

module.exports = {
    customId: 'edit-note-button',
    run: async (client, interaction) => {
        const customIdParts = interaction.customId.split('_');
        const action = customIdParts[0];
        const selectedValue = customIdParts[1];

        console.log(`Action: ${action}`);
        console.log(`Selected Value: ${selectedValue}`);

    }
};