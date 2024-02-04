const autorole = require('./autorole.js');

module.exports = client => {
    client.on('guildMemberAdd', async member => {
        autorole.execute(client, member);

        // Public Message Code
        const publicChannelIDs = ['1120030527920025650', '1168563282748125245']; // Channel where the message gets sent
        const totalMembers = member.guild.members.cache.size;
        const publicMessage = `Hello ${member}! Because of you, we have ${totalMembers} members!`;

        publicChannelIDs.forEach(async channelID => {
            const publicChannel = member.guild.channels.cache.get(channelID);
            if (publicChannel) {
                publicChannel.send(publicMessage);

                try {
                    const messages = await publicChannel.messages.fetch();
                    const mentionCount = messages.filter(msg => msg.mentions.has(member)).size;

                    // Private Message Code
                    const creationDate = member.user.createdAt;
                    const formattedCreationDate = creationDate.toLocaleDateString();
                    const privateChannelIDs = ['1168553374367621251', '1168563308937351168']; // Channel where the message gets sent
                    const privateMessage = `${member} has joined our server!
We now have ${totalMembers} members!
Their account was created on ${formattedCreationDate}.
They were mentioned ${mentionCount} times in the public channel.`;

                    privateChannelIDs.forEach(channelID => {
                        const privateChannel = member.guild.channels.cache.get(channelID);
                        if (privateChannel) {
                            privateChannel.send(privateMessage);
                        }
                    });
                } catch (error) {
                    console.error(`Error fetching messages in the public channel: ${error}`);
                }
            }
        });
    });
    
    function isWelcomeMessage(content) {
    return content.includes("Hello");
}
    
    client.on('messageCreate', async (message) => {
    if (message.channel.id === '1120030527920025650') { 
        if (isWelcomeMessage(message.content)) {
            const emojis = ['<:blaeh:1159184786250809475>'];

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
