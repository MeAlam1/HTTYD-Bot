module.exports = {
    customId: 'create-ticket-button',
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'The button has been successfully responded!',
            ephemeral: true
        });

    }
};