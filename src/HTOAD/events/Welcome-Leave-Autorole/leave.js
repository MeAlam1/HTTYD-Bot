module.exports = {
    event: 'guildMemberRemove',
    once: false,

    run: async (client, member) => {
        const totalMembers = member.guild.memberCount;
        const memberUsername = member.user.username;
        const publicMessage = `${memberUsername} has left the server! We now have ${totalMembers} members left!`;
        const WelcomeChannel = ['1120030527920025650']; // How to Own a Dragon Welcome Channel

        WelcomeChannel.forEach(channelID => {

            const publicChannel = member.guild.channels.cache.get(channelID);
            
            if (publicChannel) {
                publicChannel.send(publicMessage);
            }
        });
    }
}