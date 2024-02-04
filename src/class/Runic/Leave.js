module.exports = client => {
    client.on('guildMemberRemove', member => {
        // Public Message Code
        const publicChannelIDs = ['1203659336417677397', '1151500497950363648']; // Replace with public channel IDs
        const totalMembers = member.guild.members.cache.size;
        const memberUsername = member.user.username;
        const publicMessage = `${memberUsername} left the server. We now have ${totalMembers} members left!`;

        publicChannelIDs.forEach(channelID => {
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
    if (message.channel.id === '1151500497950363648') { 
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