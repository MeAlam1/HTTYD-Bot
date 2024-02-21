// DO NOT TOUCH THIS FILE!

// For now useless since we don't have a database yet, but it's here for future use.

const { connect } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");

module.exports = async () => {
    log('Started connecting to MongoDB...', 'warn');

    await connect(process.env.MONGODB_URI || config.handler.mongodb.uri).then(() => {
        log('MongoDB is connected to the atlas!', 'done')
    });
};