const { ModalSubmitInteraction } = require('discord.js');
const ExtendedClient = require('../../../../class/ExtendedClient');

module.exports = {
    customId: 'age-modal',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */
    run: async (client, interaction) => {

        const ageInput = interaction.fields.getTextInputValue('age-application');

        await interaction.reply({
            content: `Hey **${ageInput}**, what's up?`
        });

    }
};