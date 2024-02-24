const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'channelCreate',
    once: false,

    run: async (client, channel) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (channel.guild && channel.guild.id === HTOAD) {
            try {
                // Fetch the guild's audit logs to find out who created the channel
                const fetchedLogs = await channel.guild.fetchAuditLogs({
                    limit: 1,
                    type: 'CHANNEL_CREATE',
                });
                const creationLog = fetchedLogs.entries.first();
                let executor = creationLog ? creationLog.executor : { tag: 'Unknown', id: 'Unknown' };

                const ChannelCreateLogEmbed = new EmbedBuilder()
                    .setColor(0xbf020f)
                    .setTitle(`${executor.tag}`) // User that created the channel
                    .setURL(`https://discord.com/users/${executor.id}`) // The URL of the User
                    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                    .setDescription('A channel was created!')
                    .setThumbnail(executor.displayAvatarURL ? executor.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) : '') // Profile Picture of User, if available
                    .addFields(
                        { name: 'Creator:', value: `<@${executor.id}>`, inline: true }, // The Ping of the User who created the channel
                        { name: 'Creator ID:', value: `${executor.id}`, inline: true }, // The ID of the User
                        { name: 'Channel Name:', value: `${channel.name}`, inline: true }, // The Name of the created channel
                        { name: 'Channel ID:', value: `${channel.id}`, inline: true  } // The Channel ID
                    )
                    .setTimestamp()
                    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                const logChannelId = '1211052624682418279'; // How to Own a Dragon channel-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                // Message sent in the log channel.
                await logChannel.send({
                    embeds: [ChannelCreateLogEmbed]
                });
            } catch (error) {
                console.error('Error trying to log the created channel: ', error);
            }
        }
    }
};
