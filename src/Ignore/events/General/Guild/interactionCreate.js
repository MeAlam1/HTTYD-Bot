// DO NOT TOUCH THIS FILE!

// Description: This file will handle all the interactions with the commands.

const config = require('../../../../config');
const { log } = require('../../../../functions');

module.exports = {
    event: 'interactionCreate',

    run: (client, interaction) => {
        if (config.handler.commands.slash === false && interaction.isChatInputCommand()) return;
        if (config.handler.commands.user === false && interaction.isUserContextMenuCommand()) return;
        if (config.handler.commands.message === false && interaction.isMessageContextMenuCommand()) return;

        const command = client.collection.interactioncommands.get(interaction.commandName);

        if (!command) return;

        try {
            command.run(client, interaction);
        } catch (error) {
            log(error, 'err');
        }
    },
};
