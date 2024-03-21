/**Description:
 * This event is used to log the user unban in the Runic Isles server.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanRemove',
    once: false,
    run: async (client, ban) => {
        const Runic = '1151497491288690688'; // Runic Isles Server

        if (ban.guild.id === Runic) {
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
                    .setAuthor({ name: 'Runic Isles', iconURL: 'https://imgur.com/KgKhMsg.png'})
                    .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .addFields(
                        { name: 'User:', value: `${user.username}`, inline: true },
                        { name: 'User ID:', value: `${user.id}⠀⠀⠀⠀`, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Moderator:', value: `<@${responsibleModeratorId}>`, inline: true },
                        { name: 'Moderator ID:', value: responsibleModeratorId, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://imgur.com/KgKhMsg.png' });

                const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
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
