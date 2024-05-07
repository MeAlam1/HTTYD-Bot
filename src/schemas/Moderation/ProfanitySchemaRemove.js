
const { Schema, model } = require('mongoose');

let ProfanitySchemaRemove = new Schema({
    ignore: String,
});

module.exports = model('Profanity Filter Remove', ProfanitySchemaRemove);