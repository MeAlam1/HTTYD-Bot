module.exports = {
    event: 'guildMemberRemove',
    once: false,

    run: async (client, member) => {

        const totalMembers = member.guild.memberCount;
        const memberUsername = member.user.username;
        const publicMessage = `${memberUsername} left the server. We now have ${totalMembers} members left!`;
        const GoodbyeMessage = ['1151500497950363648']; // Runic Isles Public Server Goodbye Channel

        GoodbyeMessage.forEach(channelID => {

            const publicChannel = member.guild.channels.cache.get(channelID);
            
            if (publicChannel) {
                publicChannel.send(publicMessage);
            }
        });
    }
}