// DO NOT TOUCH THIS FILE!

// For now useless since we don't have a database yet, but it's here for future use.

const { connect } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");
const ProfanitySchema = require("../schemas/Moderation/ProfanitySchema");
const ProfanityFilter = require("../functions/profanityFilter");

module.exports = async () => {
    log('Started connecting to MongoDB...', 'info');

    await connect(process.env.MONGODB_URI || config.handler.mongodb.uri).then(() => {
        log('MongoDB is connected!', 'done')

        console.log('Starting bot...');
        ProfanitySchema.find().then(documents => {
            console.log('Loading Profanity Filter...');
            documents.forEach(doc => {
                console.log('2Loading Profanity Filter...2');
                doc.words.split(' ').forEach(word => {
                    ProfanityFilter.addWord(word);
                    console.log(`Added ${word} to the filter.`);
                });
                doc.ignore.split(' ').forEach(word => {
                    ProfanityFilter.removeWord(word);
                    console.log(`Removed ${word} from the filter.`);
                });
            });
        });
    });
};