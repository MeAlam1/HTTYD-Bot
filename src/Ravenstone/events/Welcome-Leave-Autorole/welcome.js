module.exports = client => {

    client.on('guildMemberAdd', async member => {

        const totalMembers = member.guild.memberCount;
        const publicMessage = `Hello ${member}! Because of you, we have ${totalMembers} members!`;
        const WelcomeChannel = ['1150753214510149684']; // Ravenstone Peak Welcome Channel

        WelcomeChannel.forEach(async channelID => {

            const publicChannel = member.guild.channels.cache.get(channelID);

            if (publicChannel) {
                try {
                    await publicChannel.send(publicMessage);
                } catch (error) {
                    console.error(`Error sending message in the public channel: ${error}`);
                }
            }
        });
    });

    function isWelcomeMessage(content) {
        return content.includes("Hello");
    }

    client.on('messageCreate', async (message) => {
        if (message.channel.id === '1150753214510149684') { // Ravenstone Peak Welcome Channel
            if (isWelcomeMessage(message.content)) {

                const emojis = ['<:pwease:1150933470462365726>'];

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
};
