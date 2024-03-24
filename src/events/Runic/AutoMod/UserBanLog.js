/**Description:
 * This event will log the user ban in the user-automod channel.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildBanAdd',
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
                    .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
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
                    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
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
