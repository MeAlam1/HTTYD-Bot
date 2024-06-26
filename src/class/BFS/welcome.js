const autorole = require('./autorole.js');

module.exports = client => {
    
    const BFS = '1121921556130566204'; // Bens Fintastic Sharks
    const welcomeMessages = [
        "Ahoy there {member} we hope you enjoy your stay! Be sure to keep a look out for any sharks!",
        "Welcome aboard {member} be ready to sail these waters! Keep a look out for fins!",
        "{member} just joined the crew! Be sure to give them a sailor's welcome!",
        "{member} washed up ashore!",
        "Drink up me hearties yo-ho {member}!",
        "Another shork lover has joined the crew! Welcome {member} we hope you enjoy your stay!"
    ];

    client.on('guildMemberAdd', async member => {
        if (member.guild.id === BFS) {
            autorole.execute(client, member);
        }

        const totalMembers = member.guild.memberCount;
        const messageTemplate = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        const publicMessage = messageTemplate.replace('{member}', member.toString());

        const welcomeChannelID = '1122276252968042599'; // Bens Fintastic Sharks Welcome Channel

        try {
            const publicChannel = member.guild.channels.cache.get(welcomeChannelID);
            if (publicChannel) {
                await publicChannel.send(publicMessage);
            }
        } catch (error) {
            console.error(`Error sending welcome message: ${error}`);
        }
    });

    client.on('messageCreate', async message => {
        if (message.channel.id === '1122276252968042599' && message.author.id === client.user.id) {
            const emojis = ['<:cutemako:1122273943588458628>'];
            for (const emoji of emojis) {
                try {
                    await message.react(emoji);
                } catch (error) {
                    console.error(`Error reacting with emoji ${emoji}:`, error.message);
                }
            }
        }
    });
};
