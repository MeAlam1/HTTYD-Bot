const Profanease = require('profanease');
const profanityFilter = new Profanease({ placeHolder: 'x'});
module.exports = profanityFilter;
