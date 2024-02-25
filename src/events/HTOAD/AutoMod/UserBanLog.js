/**Description:
 * This event will log the user ban in the user-automod channel.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanAdd',
    once: false,
    run: async (client, ban) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (ban.guild.id === HTOAD) {
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
                    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
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
                    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
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
