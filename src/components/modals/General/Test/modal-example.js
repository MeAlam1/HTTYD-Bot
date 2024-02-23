// DO NOT MODIFY THIS FILE! (Copy is allowed)

/**Description:
 * This is an example of a Modal to Copy Paste.
 */

module.exports = {
    customId: 'modal-example',
    run: async (client, interaction) => {

        const nameInput = interaction.fields.getTextInputValue('name');

        await interaction.reply({
            content: `Hey **${nameInput}**, what's up?`
        });

    }
};