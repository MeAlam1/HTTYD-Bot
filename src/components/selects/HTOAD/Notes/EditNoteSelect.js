/**Description:
 * This Select is used to check which note you want to edit
 * src\components\selects\HTOAD\Notes\AllNotesSelect.js
 */

const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    customId: 'edit-note-select',
    run: async (client, interaction) => {

        const value = interaction.values[0];

        if (value === 'note') {
            const modal = new ModalBuilder()
            .setTitle('Edit Note')
            .setCustomId('edit-note-modal')
            .addComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setLabel('What do you want to change the note to?')
                            .setCustomId('edit-note-text')
                            .setPlaceholder('Type the new note here!')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                    )
            );

            await interaction.reply({ content: 'You have selected to edit the note.', ephemeral: true });
        } else if (value === 'type') {
            await interaction.reply({ content: 'You have selected to edit the type.', ephemeral: true });
        } else if (value === 'status') {
            await interaction.reply({ content: 'You have selected to edit the status.', ephemeral: true });
        } else if (value === 'visibility') {
            await interaction.reply({ content: 'You have selected to edit the visibility.', ephemeral: true });
        } else if (value === 'rulebroken') {
            await interaction.reply({ content: 'You have selected to edit the Rule Broken.', ephemeral: true });
        } else if (value === 'punishment') {
            await interaction.reply({ content: 'You have selected to edit the punishment.', ephemeral: true });
        }

    }
};