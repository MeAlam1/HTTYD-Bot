const profanityFilter = require('../../../functions/profanityFilter.js');
const ProfanitySchema = require('../../../schemas/Moderation/ProfanitySchema');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1121921556130566204'  // Ben Fintastic Sharks Server
];

module.exports = {
    event: 'messageUpdate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        if (message.author.bot) return;

        const knownWords = await ProfanitySchema.find({});
        const spamWords = knownWords.map(words => words.words.toLowerCase()); 
        const ignoreWords = knownWords.map(words => words.ignore.toLowerCase()); 

        const messageContentLower = message.content.toLowerCase();

        const containsspamWord = spamWords.some(spamWord => messageContentLower.includes(spamWord));
        const containIgnoreWord = ignoreWords.some(ignoreWord => messageContentLower.includes(ignoreWord));

        if (containIgnoreWord) return;
        if (containsspamWord || profanityFilter.check(messageContentLower) || profanityFilter.check(messageContentLower.toUpperCase())) {
            if (allowedServers.includes(message.guild.id)) {
                await message.delete();
            }
        }
    }
}

