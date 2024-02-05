const autorole = require('./autorole.js');

module.exports = client => {
    
    const HTOAD = '1120022058601029652'; // How to Own a Dragon

    client.on('guildMemberAdd', async member => {
        if (member.guild.id === HTOAD) {
            autorole.execute(client, member);
        }

        const totalMembers = member.guild.members.cache.size;
        const publicMessage = `Hello ${member}! Because of you, we have ${totalMembers} members!`;

        HTOAD.forEach(async channelID => {

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
        if (message.channel.id === '1120030527920025650') { // How to Own a Dragon Welcome Channel
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
};
