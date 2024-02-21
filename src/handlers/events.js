// DO NOT TOUCH THIS FILE!

// Description: Loads all events from the events folder!

const { readdirSync } = require('fs');
const { log } = require('../functions');

module.exports = (client) => {
    for (const type of readdirSync('./src/events/')) {
        for (const dir of readdirSync('./src/events/' + type)) {
            for (const file of readdirSync('./src/events/' + type + '/' + dir).filter((f) => f.endsWith('.js'))) {
                const module = require('../events/' + type + '/' + dir + '/' + file);

                if (!module) continue;

                if (!module.event || !module.run) {
                    log('Unable to load the event ' + file + ' due to missing \'name\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                log('Loaded new event: ' + file, 'info');

                if (module.once) {
                    client.once(module.event, (...args) => module.run(client, ...args));
                } else {
                    client.on(module.event, (...args) => module.run(client, ...args));
                };
            };
        };
    };
};