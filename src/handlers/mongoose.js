const { createConnection } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");

const connectDatabases = async () => {
    const dbConnections = {
        dbATest: process.env.MONGODB_URI_TEST || config.handler.mongodb.uritest,
        dbBNote: process.env.MONGODB_URI_NOTE || config.handler.mongodb.urinote,
    };

    log('Started connecting to MongoDB databases...', 'warn');

    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000, 
        socketTimeoutMS: 45000, 
    };

    try {
        const TestDB = await createConnection(dbConnections.dbATest, connectionOptions);
        log('MongoDB TestDB is connected!', 'done');

        const NoteDB = await createConnection(dbConnections.dbBNote, connectionOptions);
        log('MongoDB NoteDB is connected!', 'done');

        return { TestDB, NoteDB };
    } catch (err) {
        log(`Error connecting to databases: ${err}`, 'error');
        throw err; 
    }
};

module.exports = connectDatabases;
