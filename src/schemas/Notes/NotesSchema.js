const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
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
}, { collection: 'htoad' });

const Note = mongoose.model('Note', notesSchema);
module.exports = Note;