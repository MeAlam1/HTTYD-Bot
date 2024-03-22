/**Description:
 * This Select is used to check which note you want to edit
 * src\components\selects\HTOAD\Notes\AllNotesSelect.js
 */


module.exports = {
    customId: 'edit-note-select',
    run: async (client, interaction) => {

        const value = interaction.values[0];

        if (value === 'note') {
            await interaction.reply({ content: 'You have selected to edit the note.', ephemeral: true });
        } else if (value === 'type') {
            await interaction.reply({ content: 'You have selected to edit the type.', ephemeral: true });
        } else if (value === 'status') {
            await interaction.reply({ content: 'You have selected to edit the status.', ephemeral: true });
        } else if (value === 'visibility') {
            await interaction.reply({ content: 'You have selected to edit the visibility.', ephemeral: true });
        }

    }
};