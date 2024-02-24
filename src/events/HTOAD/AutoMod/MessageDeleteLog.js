const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageDelete',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        const allowedRoles = [
            '1120033014416670895'  // Bots Role
        ];

        if (message.guild && message.guild.id === HTOAD) {

            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const MessageDeleteLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`A message of ${message.author.tag} has been deleted!`) 
                        .setURL(`https://discord.com/users/${message.author.id}`)
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                        .addFields(
                            { name: 'User:', value: `<@${message.author.id}>⠀⠀⠀⠀`, inline: true }, 
                            { name: 'User ID:', value: `${message.author.id}⠀⠀⠀⠀`, inline: true }, 
                            { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`},
                            { name: 'Message ID:', value: `${message.id}⠀⠀⠀⠀`, inline: true  } 
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

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
                    const messageLinks = message.content.match(regex);
                    if (messageLinks) {
                        MessageDeleteLogEmbed.addFields({ name: 'Attachment:', value: `⠀`}); 
                        otherAttachmentsContent += messageLinks.join('\n');
                    }

                    if (message.stickers.size > 0) {
                        message.stickers.forEach((sticker) => {
                            MessageDeleteLogEmbed.addFields({ name: 'Sticker:', value: `⠀`}); 
                            otherAttachmentsContent += `${sticker.url || sticker.name}\n`;
                        });
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon message-automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    await logChannel.send({
                        embeds: [MessageDeleteLogEmbed]
                    });
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
