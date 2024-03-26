/** Description:
 * This event will check if a user leaves a VC in How to Own a Dragon.
 * If the user leaves a VC and the VC becomes empty, it will delete the temporary VC created for them,
 * except for channels listed in the exceptions array.
 */

const exceptions = [
    '1120097034431639622', // Mod Dev Stage 
    '1120033811577716878', // Chatting (#2)
    '1222203117303500870', // VC Maker
    '1180158044009672785', // Admin Only VC
    '1190281615469981756', // Discord Mod VC
    '1120033166279839865'  // Support VC
];

module.exports = {
    event: 'voiceStateUpdate',
    once: false,

    run: async (client, oldState, newState) => {
        if (oldState.channelId && oldState.channelId !== newState.channelId) {
            const channel = oldState.channel;
            if (channel && channel.members.size === 0 && !exceptions.includes(channel.id)) {
                try {
                    await channel.delete();
                } catch (error) {
                    console.error(`Failed to delete channel: ${error}`);
                }
            }
        }
    }
};
