// DO NOT MODIFY THIS FILE! (Copy is allowed)

/**Description:
 * This is an example of a button to Copy Paste.
 */

module.exports = {
    customId: 'example-button',
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'The button has been successfully responded!',
            ephemeral: true
        });

    }
};