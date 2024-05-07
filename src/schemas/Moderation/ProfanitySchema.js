
const { Schema, model } = require('mongoose');

let ProfanitySchema = new Schema({
    words: String,
    ignore: String,
});

module.exports = model('Profanity Filter', ProfanitySchema);