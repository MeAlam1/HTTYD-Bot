// DO NOT TOUCH THIS FILE!

const { Schema, model } = require('mongoose');

let notes = new Schema({
    guild: String,
    moderator: String,
    user: String,
    note: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isHidden: { type: Boolean, default: false },
    type: { type: String, default: 'general' },
    status: { type: String, enum: ['open', 'closed'], default: 'closed' },
    attachments: [{ type: String }],
    visibility: { type: String, enum: ['public', 'guild'], default: 'public' },
    dmNotification: { type: Boolean, default: false },
});

module.exports = model('htoad', notes);