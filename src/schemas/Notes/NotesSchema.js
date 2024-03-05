// DO NOT TOUCH THIS FILE!

const { Schema, model } = require('mongoose');

let notes = new Schema({
    guildNoteId: Number,
    generalNoteId: Number,
    guild: String,
    moderator: String,
    user: String,
    note: String,
    createdAt: String,
    updatedAt: String,
    isHidden: { type: Boolean, default: false },
    type: { type: String, default: 'general' },
    status: { type: String, enum: ['open', 'closed'], default: 'closed' },
    attachments: [{ type: String }],
    visibility: { type: String, enum: ['public', 'guild'], default: 'public' },
    dmNotification: { type: Boolean, default: false },
});

module.exports = model('Note', notes);