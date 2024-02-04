require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');

//Load HTOAD Class Files
const HTOADwelcome = require('./class/HTOAD/welcome.js');
const HTOADleave = require('./class/HTOAD/leave.js');
const HTOADautorole = require('./class/HTOAD/autorole.js');

const client = new ExtendedClient();

client.start();

HTOADwelcome(client);
HTOADleave(client);

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);