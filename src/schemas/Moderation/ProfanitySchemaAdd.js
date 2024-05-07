
const { Schema, model } = require('mongoose');

let ProfanitySchemaAdd = new Schema({
    words: String,
});

module.exports = model('Profanity Filter Add', ProfanitySchemaAdd);