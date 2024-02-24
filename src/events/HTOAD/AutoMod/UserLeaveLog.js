const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = {
    event: 'guildMemberRemove',
    once: false,

    run: async (client, member) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (member.guild.id === HTOAD) {
            try {
                // First, fetch the audit logs to see if there was a recent kick action.
                const fetchedLogs = await member.guild.fetchAuditLogs({
                    limit: 1,
                    type: AuditLogEvent.MemberKick,
                });
                const kickLog = fetchedLogs.entries.first();

                // Determine if the last kick log entry is related to the member who just left.
                if (kickLog && kickLog.target.id === member.user.id) {
                    const { executor, reason } = kickLog;

                    // Create a special embed for kicks.
                    const KickLogEmbed = new EmbedBuilder()
                        .setColor(0xff0000) // Red for kicks
                        .setTitle(`${member.user.tag} was kicked`)
                        .setDescription(`A member was kicked from the server!`)
                        .addFields(
                            { name: 'User:', value: `${member.user.username}`, inline: true },
                            { name: 'User ID:', value: `${member.user.id}`, inline: true },
                            { name: 'Kicked by:', value: `<@${executor.id}>`, inline: false },
                            { name: 'Reason:', value: `${reason || 'No reason provided'}`, inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team' });

                    const logChannelId = '1211052643288612874'; // Your log channel ID
                    const logChannel = await client.channels.fetch(logChannelId);
                    await logChannel.send({ embeds: [KickLogEmbed] });
                } else {
                    const UserLeaveLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`${member.user.tag}`) // Tag of the user who joined
                        .setURL(`https://discord.com/users/${member.user.id}`) // The URL of the User Profile
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                        .setDescription(`A member left the server!`)
                        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of the user
                        .addFields(
                            { name: 'User:', value: `${member.user.username}⠀⠀⠀⠀`, inline: true },
                            { name: 'User ID:', value: `${member.user.id}⠀⠀⠀⠀`, inline: true },
                            { name: 'Account Created:', value: `${member.user.createdAt.toUTCString()}`, inline: false } // Account creation date of the user
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                // Message sent in the log channel.
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
