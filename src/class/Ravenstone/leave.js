module.exports = client => {
    client.on('guildMemberRemove', member => {

        const totalMembers = member.guild.memberCount;
        const memberUsername = member.user.username;
        const publicMessage = `${memberUsername} has left the server! We now have ${totalMembers} members left!`;
        const WelcomeChannel = ['1150753214510149684']; // Ravenstone Peak Test

        WelcomeChannel.forEach(channelID => {

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
        if (message.channel.id === '1150753214510149684') { // Ravenstone Peak Test
            if (isLeaveMessage(message.content)) {

                const emojis = ['<:agony:1150855986622496879>'];

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