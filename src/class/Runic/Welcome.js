const Autorole = require('./Autorole.js');

module.exports = client => {
    const targetGuildID = '1151497491288690688';

    client.on('guildMemberAdd', async member => {
        if (member.guild.id === targetGuildID) {
            Autorole.execute(client, member);
        }

        // Public Message Code
        const publicChannelIDs = ['1203659336417677396', '1151500458410647633']; // Channel where the message gets sent
        const totalMembers = member.guild.members.cache.size;
        const publicMessage = `Hey ${member}, Welcome to our humble server, **Runic Isle**. You brought us to ${totalMembers} members!`;

        publicChannelIDs.forEach(async channelID => {
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
        return content.includes("Runic");
    }

    client.on('messageCreate', async (message) => {
        if (message.channel.id === '1151500458410647633') { 
            if (isWelcomeMessage(message.content)) {
                const emojis = ['<:cwShook:1152586423266988052> '];

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
