const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    customId: 'edit-note-select',
    run: async (client, interaction) => {
        const [action, noteType] = interaction.values[0].split('_');

        switch (action) {
            case 'note':

                const modal = new ModalBuilder()
                    .setTitle(`Edit ${noteType} Note`)
                    .setCustomId('edit-note-modal')
                    .addComponents(
                        new ActionRowBuilder()
                            .addComponents(
                                new TextInputBuilder()
                                    .setLabel(`What do you want to change the ${noteType} note to?`)
                                    .setCustomId('edit-note-text')
                                    .setPlaceholder('Type the new note here!')
                                    .setStyle(TextInputStyle.Short)
                                    .setRequired(true)
                            )
                    );
                await interaction.showModal(modal);

                await interaction.reply({ content: `You have selected to edit the ${noteType} note.`, ephemeral: true });
                break;
            case 'type':
                await interaction.reply({ content: 'You have selected to edit the type.', ephemeral: true });
                break;
            case 'status':
                await interaction.reply({ content: 'You have selected to edit the status.', ephemeral: true });
                break;
            case 'visibility':
                await interaction.reply({ content: 'You have selected to edit the visibility.', ephemeral: true });
                break;
            case 'rulebroken':
                await interaction.reply({ content: 'You have selected to edit the Rule Broken.', ephemeral: true });
                break;
            case 'punishment':
                await interaction.reply({ content: 'You have selected to edit the punishment.', ephemeral: true });
                break;
            default:
                await interaction.reply({ content: 'Invalid selection.', ephemeral: true });
                break;
        }
    }
};
