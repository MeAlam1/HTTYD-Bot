// DO NOT TOUCH THIS FILE!

// Description: Deploying application commands to Discord API, so that they are available to use in the servers.

const { REST, Routes } = require("discord.js");
const { log } = require("../functions");
const config = require("../config");

module.exports = async (client) => {
    const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN || config.client.token);

    try {
        log('Started loading application commands... (this might take minutes!)', 'info');

        await rest.put(Routes.applicationCommands(config.client.id), {
            body: client.applicationcommandsArray
        });

        log('Successfully loaded application commands to Discord API.', 'done');
    } catch (e) {
        log('Unable to load application commands to Discord API.', 'err');
    };
};