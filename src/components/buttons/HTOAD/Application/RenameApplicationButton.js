const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalSubmitInteraction } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'rename-name-application',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */

    run: async (client, interaction) => {
        const modal = new ModalBuilder()
        .setTitle('Question 1/3: Name')
        .setCustomId('name-modal')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('What\'s your name?')
                        .setCustomId('name-application')
                        .setPlaceholder('Type your name here!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
        );

        await interaction.showModal(modal);
    }
};