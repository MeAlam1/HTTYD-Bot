const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const { log } = require('../functions');
const ExtendedClient = require('../class/ExtendedClient');

module.exports = (client) => {
    const eventDir = './src/events/';

    for (const dir of readdirSync(eventDir)) {
        const dirPath = join(eventDir, dir);
        if (statSync(dirPath).isDirectory()) {
            for (const subDir of readdirSync(dirPath)) {
                const subDirPath = join(dirPath, subDir);
                if (statSync(subDirPath).isDirectory()) {
                    for (const file of readdirSync(subDirPath).filter((f) => f.endsWith('.js'))) {
                        const module = require(join(eventDir, dir, subDir, file));

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
                }
            }
        }
    };
};
