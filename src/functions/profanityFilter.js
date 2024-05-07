const Profanease = require('profanease');

const leetMap = {
    '4': 'a', '@': 'a', '3': 'e', '1': 'i', '!': 'i', '0': 'o', '7': 't', '5': 's', '8': 'b', '$': 's', '#': 'h'
};

function replaceLeet(message) {
    return message.split('').map(char => leetMap[char.toLowerCase()] || char).join('');
}

const profanityFilter = new Profanease({ placeHolder: 'x'});

function check(message) {
    const cleanedMessage = replaceLeet(message);
    return profanityFilter.check(cleanedMessage);
}

function clean(message) {
    const cleanedMessage = replaceLeet(message);
    return profanityFilter.clean(cleanedMessage);
}

function addWord(word) {
    profanityFilter.addWords(word);
}

function removeWord(word) {
    profanityFilter.removeWords(word);
}

module.exports = { check, clean, addWord, removeWord};