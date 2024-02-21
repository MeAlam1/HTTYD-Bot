require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');

//Load How to Own a Dragon Class Files
const HTOADwelcome = require('./class/HTOAD/welcome.js');
const HTOADleave = require('./class/HTOAD/leave.js');

//Load Runic Class Files
const Runicwelcome = require('./class/Runic/Welcome.js');
const Runicleave = require('./class/Runic/Leave.js');

//Load Ravenstone Class Files
const Ravenstonewelcome = require('./class/Ravenstone/welcome.js');
const Ravenstoneleave = require('./class/Ravenstone/leave.js');

const client = new ExtendedClient();

client.start();

// How to Own a Dragon
HTOADwelcome(client);
HTOADleave(client);

//Runic Isles
Runicwelcome(client);
Runicleave(client);

//Ravenstone Peak
Ravenstonewelcome(client);
Ravenstoneleave(client);

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);