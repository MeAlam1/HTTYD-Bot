const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageDelete',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server
        const allowedRoles = ['1120033014416670895'];  // Bots Role
        const excludedChannelIds = [
            '1120026059686019193', // Moderator Only Channel
            '1134586375140802600', // Admin Discuss Channel
            '1131196059608174705', // Important Admin Channel
            '1230876266195062856'  // Completed Assets
        ];

        if (excludedChannelIds.includes(message.channel.id)) return;

        if (message.guild && message.guild.id === HTOAD) {
            const hasAllowedRole = message.member && message.member.roles.cache.some(role => allowedRoles.includes(role.id));
            if (!hasAllowedRole) {
                try {
                    const fetchedLogs = await message.guild.fetchAuditLogs({
                        limit: 1,
                        type: '72'
                    });
                    const deletionLog = fetchedLogs.entries.first();

                    let executor = 'Unknown'; // Default to unknown if no log is found
                    if (deletionLog) {
                        const target = deletionLog.target;
                        if (target.id === message.author.id) {
                            executor = deletionLog.executor.id;
                        }
                    }

                    const MessageDeleteLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`A message of ${message.author.tag} has been deleted!`)
                        .setURL(`https://discord.com/users/${message.author.id}`)
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png' })
                        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'User:', value: `<@${message.author.id}>`, inline: true },
                            { name: 'User ID:', value: `${message.author.id}`, inline: true },
                            { name: 'Message Content:', value: message.content ? message.content : 'Content Not Available' },
                            { name: 'Message ID:', value: `${message.id}`, inline: true },
                            { name: 'Channel:', value: `<#${message.channel.id}>`, inline: true },
                            { name: 'Deleted by:', value: `<@${executor}>`, inline: true }
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

                    let otherAttachmentsContent = "";
                    if (message.attachments.size > 0) {
                        message.attachments.forEach((attachment) => {
                            if (attachment.contentType && (attachment.contentType.includes('image') || attachment.contentType.includes('gif'))) {
                                MessageDeleteLogEmbed.setImage(attachment.url);
                            } else {
                                otherAttachmentsContent += `${attachment.url}\n`;
                            }
                        });
                    }

                    const regex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;
                    const messageLinks = message.content ? message.content.match(regex) : null;
                    if (messageLinks) {
                        MessageDeleteLogEmbed.addFields({ name: 'Attachment:', value: messageLinks.join('\n') });
                    }

                    if (message.stickers.size > 0) {
                        message.stickers.forEach((sticker) => {
                            otherAttachmentsContent += `${sticker.url || sticker.name}\n`;
                        });
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon message-automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    await logChannel.send({ embeds: [MessageDeleteLogEmbed] });
                    if (otherAttachmentsContent) {
                        await logChannel.send(otherAttachmentsContent);
                    }
                } catch (error) {
                    console.error('Error trying to log the deleted message ', error);
                }
            }
        }
    }
};
