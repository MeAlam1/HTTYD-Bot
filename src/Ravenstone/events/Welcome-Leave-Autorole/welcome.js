module.exports = {
    event: 'guildMemberAdd',
    once: false,

    run: async (client, member) => {

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
    }
};
