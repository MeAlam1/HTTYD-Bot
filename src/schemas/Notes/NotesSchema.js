// DO NOT TOUCH THIS FILE!

/**Description:
 * This Database Schema is used to store notes for users.
 * src\components\selects\HTOAD\Notes\AllNotesSelect.js
 * src\commands\Admin\Notes\Notes.js
 * src\commands\Admin\Notes\AddNote.js
 */

const { Schema, model } = require('mongoose');

let notes = new Schema({
    guildNoteNumber: Number,
    generalNoteNumber: Number,
    guildId: String,
    guild: String,
    moderatorId: String,
    moderator: String,
    userId: String,
    user: String,
    note: String,
    ruleBroken: String,
    punishment: String,
    proof: String,
    createdAt: String,
    updatedAt: String,
    isHidden: { type: Boolean, default: false },
    type: { type: String, default: 'general' },
    status: { type: String, enum: ['open', 'closed'], default: 'closed' },
    attachments: [{ type: String }],
    visibility: { type: String, enum: ['public', 'server'], default: 'public' },
    dmNotification: { type: Boolean, default: false },
});

module.exports = model('Note', notes);