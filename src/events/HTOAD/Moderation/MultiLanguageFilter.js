const Profanease = require('profanease');
const CustomProfanitySchema = require('../../../schemas/Moderation/CustomProfanitySchema.js');

const allowedServers = [
    '1120022058601029652' // How to Own a Dragon Server
];

const allowedRoles = [
    '1120033014416670895' // Bots
];

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];
        const profanityFilter = new Profanease();

        const profanityWords = await CustomProfanitySchema.find({});
        const badWord = profanityWords.map(profanity => profanity.profanity);

        const containsbadWords = badWord.some(badWords => message.content.includes(badWords));
        if (message.author.bot) return;
        if (containsbadWords || profanityFilter.check(message.content) || profanityFilter.check(message.content.toLowerCase()) || profanityFilter.check(message.content.toUpperCase()) || profanityFilter.check(message.content.charAt(0).toUpperCase() + message.content.slice(1)) || profanityFilter.check(message.content.charAt(0).toLowerCase() + message.content.slice(1))) {
            if (allowedServers.includes(message.guild.id)) {
                const cleanMessage = profanityFilter.clean(message.content);
                await message.delete();
                await message.channel.send(`${message.author} said: ${cleanMessage}`);
                const logChannelId = '1131214666757058654'; // How to Own a Dragon message-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({ 
                    content: `<@${message.author.id}> said: ${message.content}`,
                });
            }
        }
    }
}
