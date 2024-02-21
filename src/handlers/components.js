// DO NOT TOUCH THIS FILE!

// Description: Load all components from the components folder.

const { readdirSync } = require('fs');
const { log } = require('../functions');

module.exports = (client) => {
    for (const type of readdirSync('./src/components/')) {
        for (const subType of readdirSync(`./src/components/${type}`)) {
            for (const dir of readdirSync(`./src/components/${type}/${subType}`)) {
                for (const file of readdirSync(`./src/components/${type}/${subType}/${dir}`).filter(f => f.endsWith('.js'))) {
                    const module = require(`../components/${type}/${subType}/${dir}/${file}`);

            if (!module) continue;

            if (type === 'buttons') {
                if (!module.customId || !module.run) {
                    log('Unable to load the component ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.buttons.set(module.customId, module);
            } else if (type === 'selects') {
                if (!module.customId || !module.run) {
                    log('Unable to load the select menu ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.selects.set(module.customId, module);
            } else if (type === 'modals') {
                if (!module.customId || !module.run) {
                    log('Unable to load the modal ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.modals.set(module.customId, module);
            } else {
                log('Invalid component type: ' + file, 'warn');

                continue;
            };

            log('Loaded new component: ' + file, 'info');
        };
    };
};
}
}