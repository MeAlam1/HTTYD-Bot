/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to send the VC Control embed/interface.
 */

const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, PermissionFlagsBits } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADInterfaceEmbed = require('../../../embed/HTOAD/TempVC/InterfaceEmbed.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('vc-control')
        .setDescription('To control the VC.'),
    run: async (client, interaction, args) => {
            if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            const channel = interaction.channel;
            const member = interaction.member;
            const textChannelName = interaction.channel.name;
    
            const voiceChannel = interaction.guild.channels.cache.find(
                (channel) => channel.type === ChannelType.GuildVoice && channel.name === textChannelName
            );

            if (!voiceChannel) {
                await interaction.reply({
                    content: 'This command can only be executed in the chat of a voice channel.',
                    ephemeral: true
                });
                return;
            }

            const memberPermissions = channel.permissionsFor(member).has(PermissionFlagsBits.ManageChannels);
            if (!memberPermissions) {
                await interaction.reply({
                    content: 'You do not have the required permissions to use this command.',
                    ephemeral: true
                });
                return;
            }

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

            await interaction.reply({
                embeds: [HTOADInterfaceEmbed], 
                components: [row1, row2]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

