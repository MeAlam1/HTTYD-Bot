module.exports = client => {
    client.on('guildMemberRemove', member => {
        // Public Message Code
        const publicChannelIDs = ['1120030527920025650', '1168563326255648899']; // Replace with public channel IDs
        const totalMembers = member.guild.members.cache.size;
        const memberUsername = member.user.username;
        const publicMessage = `${memberUsername} has left the server! We now have ${totalMembers} members left!`;

        publicChannelIDs.forEach(channelID => {
            const publicChannel = member.guild.channels.cache.get(channelID);
            if (publicChannel) {
                publicChannel.send(publicMessage);
            }
        });
    });
    
        function isLeaveMessage(content) {
    return content.includes("left");
}
    
    client.on('messageCreate', async (message) => {
    if (message.channel.id === '1120030527920025650') { 
        if (isLeaveMessage(message.content)) {
            const emojis = ['<:toothlessannoyed:1123725531481919488>'];

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