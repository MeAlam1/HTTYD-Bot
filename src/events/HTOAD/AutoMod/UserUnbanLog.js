/**Description:
 * This event is used to log the user unban in the How to Own a Dragon server.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanRemove',
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

                if (banLog) {
                    const { executor, reason } = banLog;
                    responsibleModerator = executor ? executor.tag : 'Unknown';
                    responsibleModeratorId = executor ? executor.id : 'Unknown';
                }

                const user = ban.user;
                const UnbanLogEmbed = new EmbedBuilder()
                    .setColor(0x30b330)
                    .setTitle(`${user.tag} has been Unbanned from the server!`)
                    .setURL(`https://discord.com/users/${user.id}`)
                    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                    .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .addFields(
                        { name: 'User:', value: `${user.username}`, inline: true },
                        { name: 'User ID:', value: `${user.id}⠀⠀⠀⠀`, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Moderator:', value: `<@${responsibleModeratorId}>`, inline: true },
                        { name: 'Moderator ID:', value: responsibleModeratorId, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({
                    embeds: [UnbanLogEmbed]
                });
            } catch (error) {
                console.error('Error trying to log the user ban: ', error);
            }
        }
    }
}
