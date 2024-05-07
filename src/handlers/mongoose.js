// DO NOT TOUCH THIS FILE!

// For now useless since we don't have a database yet, but it's here for future use.

const { connect } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");
const ProfanitySchemaAdd = require("../schemas/Moderation/ProfanitySchemaAdd");
const ProfanitySchemaRemove = require("../schemas/Moderation/ProfanitySchemaRemove");
const ProfanityFilter = require("../functions/profanityFilter");

module.exports = async () => {
    log('Started connecting to MongoDB...', 'info');

    await connect(process.env.MONGODB_URI || config.handler.mongodb.uri).then(() => {
        log('MongoDB is connected!', 'done')

        ProfanitySchemaAdd.find().then(documents => {
            documents.forEach(doc => {
                if (doc.words) {
                        ProfanityFilter.addWord(doc.words);
                        console.log(`Added ${doc.words} to the filter.`);
                }
            });
        });

        ProfanitySchemaRemove.find().then(documents => {
            documents.forEach(doc => {
                if (doc.ignore) {
                        ProfanityFilter.removeWord(doc.ignore);
                        console.log(`Removed ${doc.ignore} from the filter.`);
                }
            });
        });
    });
};