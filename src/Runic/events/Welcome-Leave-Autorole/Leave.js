module.exports = client => {
    client.on('guildMemberRemove', member => {

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
    });
    
    function isLeaveMessage(content) {
        return content.includes("now");
    }
    
    client.on('messageCreate', async (message) => {
        if (message.channel.id === '1151500497950363648') { // Runic Isles Public Server Goodbye Channel
            if (isLeaveMessage(message.content)) {

                const emojis = ['<:bhevil:1151933344804782161>'];

                for (const emoji of emojis) {
                    try {
                        await message.react(emoji);
                    } catch (error) {
                        console.error(`Error reacting with emoji ${emoji}:`, error.message);
                    }
                }
            }
        }
    });
}