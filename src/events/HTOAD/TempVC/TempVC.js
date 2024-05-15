/** Description:
 * This event will check if a user joins a VC in How to Own a Dragon.
 * If the user joins a VC, it will create a temporary VC for them, which they have full control over.
 */

const VcMakerChannel = '1222203117303500870'; // HTOAD VC Maker Channel
const HTOADInterfaceEmbed = require('../../../embed/HTOAD/TempVC/InterfaceEmbed.js');
const { PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

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

            const RenameButton = new ButtonBuilder()
            .setCustomId('htoad-rename-button')
            .setLabel('Rename')
            .setEmoji('📝')
            .setStyle(ButtonStyle.Secondary);

            const LimitButton = new ButtonBuilder()
            .setCustomId('htoad-limit-button')
            .setLabel('Limit')
            .setEmoji('👥')
            .setStyle(ButtonStyle.Secondary);

            const HideButton = new ButtonBuilder()
            .setCustomId('htoad-hide-button')
            .setLabel('Hide')
            .setEmoji('🔒')
            .setStyle(ButtonStyle.Secondary);

            const UnhideButton = new ButtonBuilder()
            .setCustomId('htoad-unhide-button')
            .setLabel('Unhide')
            .setEmoji('🔓')
            .setStyle(ButtonStyle.Secondary);

            const DeleteButton = new ButtonBuilder()
            .setCustomId('htoad-delete-button')
            .setLabel('Delete')
            .setEmoji('🗑️')
            .setStyle(ButtonStyle.Secondary);

            const TransferButton = new ButtonBuilder()
            .setCustomId('htoad-transfer-button')
            .setLabel('Transfer')
            .setEmoji('🔁')
            .setStyle(ButtonStyle.Secondary);

            const ClaimButton = new ButtonBuilder()
            .setCustomId('htoad-claim-button')
            .setLabel('Claim')
            .setEmoji('✅')
            .setStyle(ButtonStyle.Secondary);


            const KickButton = new ButtonBuilder()
            .setCustomId('htoad-kick-button')
            .setLabel('Kick')
            .setEmoji('🚫')
            .setStyle(ButtonStyle.Secondary);


            const BanButton = new ButtonBuilder()
            .setCustomId('htoad-ban-button')
            .setLabel('Ban')
            .setEmoji('🔨')
            .setStyle(ButtonStyle.Secondary);


            const UnbanButton = new ButtonBuilder()
            .setCustomId('htoad-unban-button')
            .setLabel('Unban')
            .setEmoji('🛠️')
            .setStyle(ButtonStyle.Secondary);


            const row1 = new ActionRowBuilder().addComponents(RenameButton, LimitButton, HideButton, UnhideButton, DeleteButton);
            const row2 = new ActionRowBuilder().addComponents(ClaimButton, TransferButton, KickButton, BanButton, UnbanButton);

            const guild = newState.guild;
            const vcName = newState.member.user.username ? `${newState.member.user.username} VC` : 'please gimme name';
            const category = newState.channel.parent;
            try {
                const newVC = await guild.channels.create({
                    name: vcName,
                    type: ChannelType.GuildVoice,
                    parent: category,
                    permissionOverwrites: [
                        {
                            id: newState.member.id,
                            allow: [PermissionFlagsBits.ManageChannels]
                        },
                        {
                            id: "1161418815440166943",
                            allow: [PermissionFlagsBits.ManageChannels]
                        },
                    ],
                });
                await newState.setChannel(newVC);
                await newVC.send({ 
                    content: `<@${newState.member.id}>`,
                    embeds: [HTOADInterfaceEmbed], 
                    components: [row1, row2]
                });
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
