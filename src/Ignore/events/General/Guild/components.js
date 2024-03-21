// DO NOT TOUCH THIS FILE!

// Description: This file will handle all the interactions with the components.

const { log } = require('../../../../functions');

module.exports = {
    event: 'interactionCreate',
    run: (client, interaction) => {
        if (interaction.isButton()) {
            const component = client.collection.components.buttons.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        };

        if (interaction.isAnySelectMenu()) {
            const component = client.collection.components.selects.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        };

        if (interaction.isModalSubmit()) {
            const component = client.collection.components.modals.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        };
    },
};
