// DO NOT TOUCH THIS FILE!

const { createConnection } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");

const connectDatabases = async () => {
    const dbConnections = {
        dbATest: process.env.MONGODB_URItest || config.handler.mongodb.uritest,
        dbBNote: process.env.MONGODB_URInote || config.handler.mongodb.urinote,
    };

    log('Started connecting to MongoDB databases...', 'warn');

    try {
        const TestDB = await createConnection(dbConnections.dbATest, { useNewUrlParser: true, useUnifiedTopology: true });
        log('MongoDB TestDB is connected!', 'done');

        const NoteDB = await createConnection(dbConnections.dbBNote, { useNewUrlParser: true, useUnifiedTopology: true });
        log('MongoDB NoteDB is connected!', 'done');

        return { TestDB, NoteDB };
    } catch (err) {
        log(`Error connecting to databases: ${err}`, 'error');
        throw err; // Or handle it as per your application's needs
    }
};

module.exports = connectDatabases;
