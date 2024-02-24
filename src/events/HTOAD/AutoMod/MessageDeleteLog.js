const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageDelete',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        const allowedRoles = [
            '1120033014416670895'  // Bots 
        ];

        if (message.guild && message.guild.id === HTOAD) {

            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const DeleteLog = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`${message.author.tag}`) // User that sent the message
                        .setURL(`https://discord.com/users/${message.author.id}`) // The URL of the User
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                        .setDescription('A message was deleted!')
                        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of User
                        .addFields(
                            { name: 'The User:', value: `<@${message.author.id}>⠀⠀⠀⠀`, inline: true }, // The Ping of the User
                            { name: 'The User ID:', value: `${message.author.id}⠀⠀⠀⠀`, inline: true }, // The ID of the User
                            { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`}, // The Message that was sent
                            { name: 'The Message ID:', value: `${message.id}⠀⠀⠀⠀`, inline: true  } // The Message ID
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                    let otherAttachmentsContent = ""; // Initialize a variable to hold non-image attachments, links, and stickers

                    if (message.attachments.size > 0) {
                        message.attachments.forEach((attachment) => {
                            // Check if the attachment is an image or a gif
                            if (attachment.contentType && (attachment.contentType.includes('image') || attachment.contentType.includes('gif'))) {
                                // Add image/gif to embed
                                DeleteLog.setImage(attachment.url);
                            } else {
                                // For video or other file types, collect the URLs for direct message content
                                otherAttachmentsContent += `${attachment.url}\n`;
                            }
                        });
                    }

                    // Include links from the message content
                    const regex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;
                    const messageLinks = message.content.match(regex);
                    if (messageLinks) {
                        DeleteLog.addFields({ name: 'Attachment:', value: `⠀`}); 
                        otherAttachmentsContent += messageLinks.join('\n');
                    }

                    // Handle stickers
                    if (message.stickers.size > 0) {
                        message.stickers.forEach((sticker) => {
                            DeleteLog.addFields({ name: 'Sticker:', value: `⠀`}); 
                            otherAttachmentsContent += `${sticker.url || sticker.name}\n`;
                        });
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    // Message sent in the log channel.
                    await logChannel.send({
                        embeds: [DeleteLog]
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
