// DO NOT TOUCH THIS FILE!

/**Description:
 * This Database Schema is used to store Known Phishing links.
 * src\commands\Admin\Moderation\AddLink.js
 */

const { Schema, model } = require('mongoose');

let KnownLinkSchema = new Schema({
    link: String,
});

module.exports = model('Known Links', KnownLinkSchema);