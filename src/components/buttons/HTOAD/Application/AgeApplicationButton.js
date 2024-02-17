const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalSubmitInteraction } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'name-modal',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */

    run: async (client, interaction) => {
        const modal = new ModalBuilder()
        .setTitle('Question 2/3: Age')
        .setCustomId('age-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('What\'s your age?')
                        .setCustomId('age-application')
                        .setPlaceholder('Type your age here!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
        );

        await interaction.showModal(modal);
    }
};