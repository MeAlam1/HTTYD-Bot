const profanityFilter = require('../../../functions/profanityFilter.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
    '1121921556130566204'  // Ben Fintastic Sharks Server
];

const allowedChannels = [
    // Ben Fintastic Sharks Server
    '1179097126978986015', // Staff Chat
    '1121922935611998219'  // Moderator Only
];

const allowedRoles = [
    // Ben Fintastic Sharks Server
    '1237467198537338930', // Admin
    '1122271190443098173', // Moderator
    '1177046468268404776', // Staff UA
    '1122271311985639434'  // Owner
];

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        if (message.author.bot) return;
        if (message.channel == allowedChannels) return;
        if (message.member.roles.cache.some(role => allowedRoles.includes(role.id))) return;

        if (profanityFilter.check(message.content) || profanityFilter.check(message.content.toLowerCase()) || profanityFilter.check(message.content.toUpperCase()) || profanityFilter.check(message.content.charAt(0).toUpperCase() + message.content.slice(1)) || profanityFilter.check(message.content.charAt(0).toLowerCase() + message.content.slice(1))) {
            if (allowedServers.includes(message.guild.id)) {
                const cleanMessage = profanityFilter.clean(message.content);
                await message.delete();
                await message.channel.send(`**<@${message.author.id}>** said: ${cleanMessage}`);

                if (message.guild.id === '1120022058601029652') {
                    const channel = message.guild.channels.cache.get('1168633539676344490');
                    channel.send(`**<@${message.author.id}>** said: ${message.content}\n\nCleaned message: ${cleanMessage}`);
                }
            }
        }
    }
}

