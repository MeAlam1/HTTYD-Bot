const Profanease = require('profanease');
const fs = require('fs');
const path = require('path');

const leetMap = {
    '4': 'a', '@': 'a', '3': 'e', '1': 'i', '!': 'i', '0': 'o', '7': 't', '5': 's', '8': 'b', '$': 's', '#': 'h'
};

const dataFilePath = path.join(__dirname, 'profanityData.json');

let profanityFilter = null;

function getProfanityFilter() {
    if (!profanityFilter) {
        profanityFilter = new Profanease({ placeHolder: 'x'});
        loadWords();
    }
    return profanityFilter;
}

function replaceLeet(message) {
    return message.split('').map(char => leetMap[char.toLowerCase()] || char).join('');
}

function check(message) {
    const cleanedMessage = replaceLeet(message);
    return getProfanityFilter().check(cleanedMessage);
}

function clean(message) {
    const cleanedMessage = replaceLeet(message);
    return getProfanityFilter().clean(cleanedMessage);
}

function addWords(words) {
    getProfanityFilter().addWords(words);
    saveWords();
}

function removeWords(words) {
    getProfanityFilter().removeWords(words);
    saveWords();
}

function saveWords() {
    const words = profanityFilter.getWords();
    fs.writeFileSync(dataFilePath, JSON.stringify(words), 'utf8');
}

function loadWords() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        if (data) {
            const words = JSON.parse(data);
            profanityFilter.addWords(words);
        }
    } catch (error) {
        console.error('Failed to load words from file:', error);
    }
}

module.exports = { check, clean, addWords, removeWords };
