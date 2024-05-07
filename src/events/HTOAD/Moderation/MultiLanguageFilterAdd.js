const profanityFilter = require('../../../functions/profanityFilter.js');
const ProfanitySchema = require('../../../schemas/Moderation/ProfanitySchema');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1121921556130566204'  // Ben Fintastic Sharks Server
];

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const knownWords = await ProfanitySchema.find({});
        const spamWords = knownWords.map(words => words.words);
        const containsspamWord = spamWords.some(spamWord => message.content.includes(spamWord));

        const ignoreWords = knownWords.map(words => words.ignore);
        const containIgnoreWord = ignoreWords.some(ignoreWord => message.content.includes(ignoreWord));

        if (message.author.bot) return;
        if (containIgnoreWord) return;
        if (containsspamWord || profanityFilter.check(message.content) || profanityFilter.check(message.content.toLowerCase()) || profanityFilter.check(message.content.toUpperCase()) || profanityFilter.check(message.content.charAt(0).toUpperCase() + message.content.slice(1)) || profanityFilter.check(message.content.charAt(0).toLowerCase() + message.content.slice(1))) {
            if (allowedServers.includes(message.guild.id)) {
                await message.delete();
            }
        }
    }
}
