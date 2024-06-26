/**Description:
 * This event will log the user ban in the Logging channel.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanAdd',
    once: false,
    run: async (client, ban) => {
        const BFS = '1121921556130566204'; // Bens Fintastic Sharks Server

        if (ban.guild.id === BFS) {
            try {
                const fetchedLogs = await ban.guild.fetchAuditLogs({
                    limit: 1,
                    type: AuditLogEvent.MemberBanAdd,
                });
                const banLog = fetchedLogs.entries.first();

                let responsibleModerator = 'Unknown';
                let responsibleModeratorId = 'Unknown';
                let banReason = 'No reason provided';

                if (banLog) {
                    const { executor, reason } = banLog;
                    responsibleModerator = executor ? executor.tag : 'Unknown';
                    responsibleModeratorId = executor ? executor.id : 'Unknown';
                    banReason = reason || 'No reason provided'; 
                }

                const user = ban.user;
                const BanLogEmbed = new EmbedBuilder()
                    .setColor(0xff0000)
                    .setTitle(`${user.tag} has been Banned!`)
                    .setURL(`https://discord.com/users/${user.id}`) 
                    .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                    .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                    .addFields(
                        { name: 'User:', value: `${user.username}`, inline: true },
                        { name: 'User ID:', value: `${user.id}`, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Moderator:', value: `<@${responsibleModeratorId}>`, inline: true },
                        { name: 'Moderator ID:', value: responsibleModeratorId, inline: true },
                        { name: 'Ban Reason:', value: banReason, inline: false } 
                    )
                    .setTimestamp()
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({
                    embeds: [BanLogEmbed]
                });
            } catch (error) {
                console.error('Error trying to log the user ban: ', error);
            }
        }
    }
}
