// DO NOT TOUCH THIS FILE!

const { model, Schema } = require('mongoose');

module.exports = model('GuildSchema',
    new Schema({
        guild: String,
        prefix: String
    })
);