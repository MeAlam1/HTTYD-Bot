const { WelcomeChannel } = require('discord.js');
const Autorole = require('./Autorole.js');
const Runic = '1151497491288690688'; // Runic Isles Public Server

module.exports = {
    name: 'guildMemberAdd',
    once: false,

    run: async (client, member) => {
        if (member.guild.id === Runic) {
            Autorole.execute(client, member);
        }

        const totalMembers = member.guild.memberCount;
        const publicMessage = `Hey ${member}, Welcome to our humble server, **Runic Isles**. You brought us to ${totalMembers} members!`;
        const WelcomeChannel = ['1151500458410647633']; // Runic Isle Public Server Welcome Channel

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
    }
}
