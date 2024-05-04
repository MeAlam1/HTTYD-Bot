/** Description:
 * This event will check if a user joins a VC in How to Own a Dragon.
 * If the user joins a VC, it will create a temporary VC for them, which they have full control over.
 */

const VcMakerChannel = '1222203117303500870'; // HTOAD VC Maker Channel
const { PermissionFlagsBits, ChannelType } = require('discord.js');

const exceptions = [
    '1120097034431639622', // Mod Dev Stage 
    '1120033811577716878', // Chatting (#2)
    '1222203117303500870', // VC Maker
    '1180158044009672785', // Admin Only VC
    '1190281615469981756', // Discord Mod VC
    '1120033166279839865'  // Support VC
];

const targetGuildId = '1120022058601029652'; // How to Own a Dragon

module.exports = {
    event: 'voiceStateUpdate',
    once: false,

    run: async (client, oldState, newState) => {
        if (newState.channelId === VcMakerChannel && oldState.channelId !== newState.channelId) {
            const guild = newState.guild;
            const vcName = newState.member.user.username ? `${newState.member.user.username} VC` : 'please gimme name';
            const category = newState.channel.parent;
            try {
                const newVC = await guild.channels.create(vcName, {
                    type: ChannelType.GuildVoice,
                    parent: category,
                    permissionOverwrites: [
                        {
                            id: newState.member.id,
                            allow: [PermissionFlagsBits.ManageChannels, PermissionFlagsBits.Invite],
                        },
                        {
                            id: guild.roles.everyone,
                            deny: [PermissionFlagsBits.ManageChannels, PermissionFlagsBits.ViewChannel],
                        },
                        {
                            id: guild.roles.admin,
                            allow: [PermissionFlagsBits.ManageChannels, PermissionFlagsBits.ViewChannel],
                        }
                    ],
                });
                await newState.setChannel(newVC);
            } catch (error) {
                console.error(`Error creating a VC: ${error}`);
            }
        } else if (newState.guild.id === targetGuildId) {
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
    }
};
