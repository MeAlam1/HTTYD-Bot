/** Description:
 * This event will check if a user joins a VC in How to Own a Dragon.
 * If the user joins a VC, it will create a temporary VC for them, which they have full control over.
 */

const VcMakerChannel = '1222203117303500870'; // HTOAD VC Maker Channel
const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    event: 'voiceStateUpdate',
    once: false,

    run: async (client, oldState, newState) => {
        if (newState.channelId === VcMakerChannel && oldState.channelId !== newState.channelId) {
            const guild = newState.guild;
            const vcName = `${newState.member.user.username}`;
            const category = newState.channel.parent;
            try {
                const newVC = await guild.channels.create({
                    name: vcName,
                    type: 'GUILD_VOICE',
                    parent: category,
                    permissionOverwrites: [
                        {
                            id: newState.member.id,
                            allow: [PermissionFlagsBits.ManageChannels],
                        },
                        {
                            id: guild.roles.everyone,
                            deny: [PermissionFlagsBits.ManageChannels],
                        },
                        {
                            id: guild.roles.everyone,
                            deny: [PermissionFlagsBits.ViewChannel],
                        }
                    ],
                });
                await newState.setChannel(newVC);

            } catch (error) {
                console.error(`Error creating a VC: ${error}`);
            }
        }
    }
};
