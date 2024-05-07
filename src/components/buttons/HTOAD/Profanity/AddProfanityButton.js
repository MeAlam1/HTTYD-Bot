const profanityFilter = require('../../../../functions/profanityFilter.js');

module.exports = {
    customId: 'htoad-add-profanity-button',
    run: async (client, interaction) => {


        const Profanity = interaction.options.getString('profanity');

        try {
            profanityFilter.addWords([Profanity]);
            await interaction.update({ content: 'Profanity word has been added to the list.'});
        } catch (error) {
            await interaction.update({ content: `An error occurred while adding the profanity word.`});
            return;
        }
    }
};
