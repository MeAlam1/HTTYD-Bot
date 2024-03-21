// DO NOT TOUCH THIS FILE!

// Description: Load all components from the components folder.

const { readdirSync } = require(`fs`);
const { log } = require(`../functions`);

// Add Servers to this Array whenever they get their own folder
const folders = ['General', 'HTOAD', 'Runic', 'Ravenstone'];
const components = ['buttons', 'selects', 'modals'];

module.exports = (client) => {
    folders.forEach(folder => {
        for (const type of readdirSync(`./src/${folder}`)) {
            if (!components.includes(type)) continue;
            for (const subType of readdirSync(`./src/${folder}/${type}`)) {
                    for (const file of readdirSync(`./src/${folder}/${type}/${subType}`).filter(f => f.endsWith(`.js`))) {
                        const module = require(`../${folder}/${type}/${subType}/${file}`);

                        if (!module) continue;

                        if (type === `buttons`) {
                            if (!module.customId || !module.run) {
                                log(`Unable to load the component ` + file + ` due to missing \`structure#customId\` or/and \`run\` properties.`, `warn`);

                                continue;
                            };

                            client.collection.components.buttons.set(module.customId, module);
                        } else if (type === `selects`) {
                            if (!module.customId || !module.run) {
                                log(`Unable to load the select menu ` + file + ` due to missing \`structure#customId\` or/and \`run\` properties.`, `warn`);

                                continue;
                            };

                            client.collection.components.selects.set(module.customId, module);
                        } else if (type === `modals`) {
                            if (!module.customId || !module.run) {
                                log(`Unable to load the modal ` + file + ` due to missing \`structure#customId\` or/and \`run\` properties.`, `warn`);

                                continue;
                            };

                            client.collection.components.modals.set(module.customId, module);
                        } else {
                            log(`Invalid component type: ` + file, `warn`);

                            continue;
                        };

                        log(`Loaded new component: ` + file, `info`);
                    };
                };
        };
    });
};