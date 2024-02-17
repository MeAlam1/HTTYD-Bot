const { ModalSubmitInteraction, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'age-modal',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */

    run: async (client, interaction) => {

        const AgeInput = interaction.fields.getTextInputValue('age-application');

        const Rename = new ButtonBuilder()
        .setCustomId('change-age-application')
        .setLabel('Change Age')
        .setStyle(ButtonStyle.Danger);

        const Next = new ButtonBuilder()
        .setCustomId('open-timezone-application')
        .setLabel('Continue')
        .setStyle(ButtonStyle.Success);


       const row = new ActionRowBuilder().addComponents(Next, Rename);

        await interaction.reply({
            content: `
            You're ***${AgeInput}*** Years old.
Do you want to change your age or continue?`,
            components: [row],
            ephemeral: true
        });
}
}