/**Description:
 * This event is used to log the user leave/kick from the server.
 */

const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildMemberRemove',
    once: false,

    run: async (client, member) => {
        const Runic = '1151497491288690688'; // Runic Isles Server

        if (member.guild.id === Runic) {
            try {
                const fetchedLogs = await member.guild.fetchAuditLogs({
                    limit: 1,
                    type: AuditLogEvent.MemberKick,
                });
                const kickLog = fetchedLogs.entries.first();

                if (kickLog && kickLog.target.id === member.user.id) {
                    const { executor, reason } = kickLog;

                    const KickLogEmbed = new EmbedBuilder()
                        .setColor(0xff0000)
                        .setTitle(`${member.user.tag} has been kicked from the server!`)
                        .setURL(`https://discord.com/users/${member.user.id}`)
                        .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                        .addFields(
                            { name: 'User:', value: `${member.user.username}`, inline: true },
                            { name: 'User ID:', value: `${member.user.id}`, inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Kicked by:', value: `<@${executor.id}>`, inline: true },
                            { name: 'Reason:', value: `${reason || 'No reason provided'}`, inline: false },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                    const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
                    const logChannel = await client.channels.fetch(logChannelId);
                    await logChannel.send({ embeds: [KickLogEmbed] });
                } else {
                    const UserLeaveLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`${member.user.tag} has left the server!`)
                        .setURL(`https://discord.com/users/${member.user.id}`)
                        .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                        .addFields(
                            { name: 'User:', value: `${member.user.username}⠀⠀⠀⠀`, inline: true },
                            { name: 'User ID:', value: `${member.user.id}⠀⠀⠀⠀`, inline: true },
                            { name: 'Account Created:', value: `${member.user.createdAt.toUTCString()}`, inline: false }
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({
                    embeds: [UserLeaveLogEmbed]
                });
                }
            } catch (error) {
                console.error('Error trying to log the user leave/kick: ', error);
            }
        }
    }
};
