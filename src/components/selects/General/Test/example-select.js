// DO NOT MODIFY THIS FILE! (Copy is allowed)

/**Description:
 * This is an example of a Select to Copy Paste.
 */
module.exports = {
    customId: 'example-select',
    run: async (client, interaction) => {

        const value = interaction.values[0];
        
        await interaction.reply({
            content: `You have selected from the menu: **${value}**`,
            ephemeral: true
        });

    }
};