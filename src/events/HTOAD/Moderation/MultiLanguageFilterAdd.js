const profanityFilter = require('../../../functions/profanityFilter.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1121921556130566204'  // Ben Fintastic Sharks Server
];

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        if (message.author.bot) return;
        if (profanityFilter.check(message.content) || profanityFilter.check(message.content.toLowerCase()) || profanityFilter.check(message.content.toUpperCase()) || profanityFilter.check(message.content.charAt(0).toUpperCase() + message.content.slice(1)) || profanityFilter.check(message.content.charAt(0).toLowerCase() + message.content.slice(1))) {
            if (allowedServers.includes(message.guild.id)) {
                const cleanMessage = profanityFilter.clean(message.content);
                await message.delete();
                await message.channel.send(`${message.author} said: ${cleanMessage}`);
            }
        }
    }
}
