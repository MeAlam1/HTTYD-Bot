// DO NOT TOUCH THIS FILE!

// Description: Makes sure that the Console Prints the Logs in a nice way.

const chalk = require('chalk');

const log = (string, style) => {
    switch (style) {

        case 'err': {
            console.error(chalk.red('[ERROR] ' + string));

            break;
        };

        case 'warn': {
            console.warn(chalk.yellow('[WARNING] ' + string));

            break;
        };

        case 'done': {
            console.log(chalk.green('[SUCCESS] ' + string));

            break;
        };

        default: {
            console.log(string);

            break;
        };
    };
};

const time = (time, style) => {
    return `<t:${Math.floor(time / 1000)}${style ? `:${style}` : ''}>`;
};

module.exports = {
    log,
    time
};