
const { Schema, model } = require('mongoose');

let test = new Schema({
    name: String,
});

module.exports = model('testScema13579', test);