/**Description:
 * This button is to Edit a Note.
 */

const { ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder } = require('discord.js');

module.exports = {
    customId: 'edit-note-button',
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
        .setTitle('Edit Notes')
        .setCustomId('modal-example')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('What\'s your name?')
                        .setCustomId('name')
                        .setPlaceholder('Type your name here!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
        );

        interaction.showModal(modal);
    }
};