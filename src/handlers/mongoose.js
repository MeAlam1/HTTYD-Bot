const { createConnection } = require("mongoose");
const retry = require('async-retry');
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
        const TestDB = await retry(async () => {
            return await createConnection(dbConnections.dbATest, connectionOptions);
        }, {
            retries: 5, // Number of retries
            factor: 2, // The exponential factor
            minTimeout: 1000, // The number of milliseconds before starting the first retry
            onRetry: (err, attempt) => log(`Attempt ${attempt} failed. Retrying...`, 'warn'),
        });
        log('MongoDB TestDB is connected!', 'done');

        const NoteDB = await retry(async () => {
            return await createConnection(dbConnections.dbBNote, connectionOptions);
        }, {
            retries: 5, // Adjust retry settings as needed
            factor: 2,
            minTimeout: 1000,
            onRetry: (err, attempt) => log(`Attempt ${attempt} failed. Retrying...`, 'warn'),
        });
        log('MongoDB NoteDB is connected!', 'done');

        return { TestDB, NoteDB };
    } catch (err) {
        log(`Error connecting to databases: ${err}`, 'error');
        throw err;
    }
};
