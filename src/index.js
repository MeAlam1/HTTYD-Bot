require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');

//Load HTOAD Class Files
const HTOADwelcome = require('./class/htoad/welcome.js');
const HTOADleave = require('./class/htoad/leave.js');

//Load Runic Class Files
const Runicwelcome = require('./class/Runic/Welcome.js');
const Runicleave = require('./class/Runic/Leave.js');
const RunicETAReact = require('./class/Runic/ETAReact.js');

const client = new ExtendedClient();

client.start();

//HTOAD
HTOADwelcome(client);
HTOADleave(client);

//Runic Isles
Runicwelcome(client);
Runicleave(client);
RunicETAReact(client);

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);