const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageUpdate',
    once: false,

    run: async (client, oldMessage, newMessage) => {
        
        const contentChanged = oldMessage.content !== newMessage.content;
        const attachmentsChanged = oldMessage.attachments.size !== newMessage.attachments.size || !oldMessage.attachments.every((value, key) => newMessage.attachments.has(key));
        const linksChanged = extractLinks(oldMessage.content).toString() !== extractLinks(newMessage.content).toString();

        if (!contentChanged && !attachmentsChanged && !linksChanged) return; 

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (newMessage.guild && newMessage.guild.id === HTOAD) {
            const member = newMessage.member;
            const allowedRoles = ['1120033014416670895']; // Bots Role

            const hasAllowedRole = member && member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const MessageUpdateLogEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03)
                        .setTitle(`${newMessage.author.tag}`) 
                        .setURL(`https://discord.com/users/${newMessage.author.id}`)
                        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                        .setDescription('A message was edited!')
                        .setThumbnail(newMessage.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'User:', value: `<@${newMessage.author.id}>`, inline: true },
                            { name: 'User ID:', value: `${newMessage.author.id}`, inline: true },
                            { name: 'Message Before:', value: `${oldMessage.content.substring(0, 1024) || 'None'}`},
                            { name: 'Message After:', value: `${newMessage.content.substring(0, 1024) || 'None'}`},
                            { name: 'Message ID:', value: `${newMessage.id}`, inline: true }
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                    let attachmentComparisonContent = "";
                    
                    if (oldMessage.attachments.size > 0) {
                        attachmentComparisonContent += "Old Attachments:\n";
                        oldMessage.attachments.forEach((attachment) => {
                            attachmentComparisonContent += `${attachment.url}\n`;
                        });
                    }

                    if (newMessage.attachments.size > 0) {
                        attachmentComparisonContent += "\nNew Attachments:\n";
                        newMessage.attachments.forEach((attachment) => {
                            attachmentComparisonContent += `${attachment.url}\n`;
                        });
                    }

                    const oldLinks = extractLinks(oldMessage.content);
                    const newLinks = extractLinks(newMessage.content);
                    if (oldLinks.length > 0 || newLinks.length > 0) {
                        attachmentComparisonContent += "\nLinks Changed:\n";
                        if (oldLinks.length > 0) {
                            attachmentComparisonContent += "Old Links:\n" + oldLinks.join('\n') + '\n';
                        }
                        if (newLinks.length > 0) {
                            attachmentComparisonContent += "New Links:\n" + newLinks.join('\n');
                        }
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon message-automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    await logChannel.send({
                        embeds: [MessageUpdateLogEmbed]
                    });
                    if (attachmentComparisonContent) {
                        await logChannel.send(attachmentComparisonContent);
                    }
                } catch (error) {
                    console.error('Error trying to log the edited message: ', error);
                }
            }
        }
    }
};

// Helper function to extract links from a string using a regex
function extractLinks(text) {
    const regex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/g;
    const matches = text.match(regex);
    return matches || [];
}
