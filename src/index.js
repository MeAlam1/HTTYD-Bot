require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');

//Load HTOAD Class Files
const welcome = require('./class/HTOAD/welcome.js');
const leave = require('./class/HTOAD/leave.js');
const autorole = require('./class/HTOAD/autorole.js');

const client = new ExtendedClient();

client.start();

welcome(client);
leave(client);

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);