// DO NOT TOUCH THIS FILE!

// Description: Load all events from the events folder.

const { readdirSync } = require('fs');
const { log } = require('../functions');

// Add Servers to this Array whenever they get their own folder
const folders = ['Ignore', 'HTOAD', 'Runic', 'Ravenstone'];

module.exports = (client) => {
    folders.forEach(folder => {
        for (const type of readdirSync(`./src/${folder}/events/`)) {
                for (const file of readdirSync(`./src/${folder}/events/${type}`).filter((f) => f.endsWith('.js'))) {
                    const module = require(`../${folder}/events/${type}/${file}`);

                    if (!module) continue;

                    if (!module.event || !module.run) {
                        log(`Unable to load the event ${file} due to missing 'event' or/and 'run' properties.`, 'warn');
                        continue;
                    };

                    log(`Loaded new event: ${file}`, 'info');

                    if (module.once) {
                        client.once(module.event, (...args) => module.run(client, ...args));
                    } else {
                        client.on(module.event, (...args) => module.run(client, ...args));
                    };
                };
        };
    });
};
