// DO NOT TOUCH THIS FILE!

/**Description:
 * This Database Schema is used to store Custom Profanity Words.
 * src\events\HTOAD\Moderation\MultiLanguageFilter.js
 */

const { Schema, model } = require('mongoose');

let CustomProfanity = new Schema({
    profanity: String,
});

module.exports = model('Custom Profanity', CustomProfanity);