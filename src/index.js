// DO NOT TOUCH THIS FILE!
 
// Description: Main file for the bot, loads the client and the classes.

require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');

const EventEmitter = require('events');

EventEmitter.defaultMaxListeners = 50;

const client = new ExtendedClient();

client.start();

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);