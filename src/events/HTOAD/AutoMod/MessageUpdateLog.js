const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageUpdate',
    once: false,

    run: async (client, oldMessage, newMessage) => {
        
        if (oldMessage.content === newMessage.content) return;

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (newMessage.guild && newMessage.guild.id === HTOAD) {
            const member = newMessage.member; // Get the member who sent the message
            const allowedRoles = ['1120033014416670895']; // Bots 

            const hasAllowedRole = member && member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const EditLog = new EmbedBuilder()
                        .setColor(0x0aff3b)
                        .setTitle(`${newMessage.author.tag}`) // User that sent the message
                        .setURL(`https://discord.com/users/${newMessage.author.id}`) // The URL of the User
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                        .setDescription('A message was edited!')
                        .setThumbnail(newMessage.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of User
                        .addFields(
                            { name: 'The User:', value: `<@${newMessage.author.id}>`, inline: true }, // The Ping of the User
                            { name: 'The User ID:', value: `${newMessage.author.id}`, inline: true }, // The ID of the User
                            { name: 'Message Before:', value: `${oldMessage.content.substring(0, 1024) || 'None'}`}, // The original Message that was sent
                            { name: 'Message After:', value: `${newMessage.content.substring(0, 1024) || 'None'}`}, // The Message after edit
                            { name: 'The Message ID:', value: `${newMessage.id}`, inline: true  } // The Message ID
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                    // Additional handling for attachments and stickers
                    let otherAttachmentsContent = ""; // Initialize a variable to hold non-image attachments, links, and stickers

                    if (newMessage.attachments.size > 0) {
                        newMessage.attachments.forEach((attachment) => {
                            // Check if the attachment is an image or a gif
                            if (attachment.contentType && (attachment.contentType.includes('image') || attachment.contentType.includes('gif'))) {
                                // Add image/gif to embed
                                EditLog.setImage(attachment.url);
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
                        EditLog.addFields({ name: 'Attachment:', value: `⠀`}); 
                        otherAttachmentsContent += messageLinks.join('\n');
                    }

                    // Handle stickers
                    if (newMessage.stickers.size > 0) {
                        newMessage.stickers.forEach((sticker) => {
                            EditLog.addFields({ name: 'Sticker:', value: `⠀`}); 
                            otherAttachmentsContent += `${sticker.url || sticker.name}\n`;
                        });
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    // Message sent in the log channel.
                    await logChannel.send({
                        embeds: [EditLog]
                    });
                    if (otherAttachmentsContent) {
                        await logChannel.send(otherAttachmentsContent);
                    }
                } catch (error) {
                    console.error('Error trying to log the edited message ', error);
                }
            }
        }
    }
};
