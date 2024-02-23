module.exports = {
    customId: 'example-button',
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'The button has been successfully responded!',
            ephemeral: true
        });

    }
};