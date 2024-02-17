const { ModalSubmitInteraction, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'name-modal',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */

    run: async (client, interaction) => {

        const NameInput = interaction.fields.getTextInputValue('name-application');

        const Rename = new ButtonBuilder()
        .setCustomId('rename-name-application')
        .setLabel('Rename')
        .setStyle(ButtonStyle.Danger);

        const Next = new ButtonBuilder()
        .setCustomId('open-age-application')
        .setLabel('Continue')
        .setStyle(ButtonStyle.Success);


       const row = new ActionRowBuilder().addComponents(Next, Rename);

        await interaction.reply({
            content: `
            You're name is ***${NameInput}***.
Do you want to rename or continue?`,
            components: [row],
            ephemeral: true
        });
}
}