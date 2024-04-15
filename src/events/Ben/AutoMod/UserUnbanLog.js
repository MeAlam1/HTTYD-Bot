/**Description:
 * This event is used to log the user unban in the Bens Fintastic Sharks server.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanRemove',
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
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                    .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    .addFields(
                        { name: 'User:', value: `${user.username}`, inline: true },
                        { name: 'User ID:', value: `${user.id}⠀⠀⠀⠀`, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Moderator:', value: `<@${responsibleModeratorId}>`, inline: true },
                        { name: 'Moderator ID:', value: responsibleModeratorId, inline: true },
                    )
                    .setTimestamp()
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                    const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
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
