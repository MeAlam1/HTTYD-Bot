// DO NOT TOUCH THIS FILE!

// Description: Makes sure that the Console Prints the Logs in a nice way.

const { log } = require("../../../../functions");

module.exports = {
    event: 'ready',
    once: true,
    run: (_, client) => {

        log('Logged in as: ' + client.user.tag, 'done');

    }
};