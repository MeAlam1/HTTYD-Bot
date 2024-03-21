const autorole = require('./autorole.js');
const HTOAD = '1120022058601029652'; // How to Own a Dragon

module.exports = {
    event: 'guildMemberAdd',
    once: false,
    
    run: async (client, member) => {

        if (member.guild.id === HTOAD) {
            autorole.execute(client, member);
        }

        const totalMembers = member.guild.memberCount;
        const publicMessage = `Hello ${member}! Because of you, we have ${totalMembers} members!`;
        const WelcomeChannel = ['1120030527920025650']; // How to Own a Dragon Welcome Channel

        WelcomeChannel.forEach(async channelID => {

            const publicChannel = member.guild.channels.cache.get(channelID);

            if (publicChannel){
                try {
                    await publicChannel.send(publicMessage);
                } catch (error) {
                    console.error(`Error sending message in the public channel: ${error}`);
                }
            }
        });
    } 
}
