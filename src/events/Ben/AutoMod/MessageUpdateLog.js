/**Description:
 * This event is used to log the edited messages in the Bens Fintastic Sharks server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageUpdate',
    once: false,

    run: async (client, oldMessage, newMessage) => {
        
        const contentChanged = oldMessage.content !== newMessage.content;
        const attachmentsChanged = oldMessage.attachments.size !== newMessage.attachments.size || !oldMessage.attachments.every((value, key) => newMessage.attachments.has(key));
        const linksChanged = extractLinks(oldMessage.content).toString() !== extractLinks(newMessage.content).toString();

        if (!contentChanged && !attachmentsChanged && !linksChanged) return; 

        const BFS = '1121921556130566204'; // Bens Fintastic Sharks Server

        const allowedRoles = [
            '1122297542202363976'  // Bots Role
        ];

        const excludedChannelIds = [
            '1121922935611998219', // Moderator Only Channel
            '1179097126978986015'  // Staff Only Channel
        ];

        if (excludedChannelIds.includes(newMessage.channel.id)) return;

        if (newMessage.guild && newMessage.guild.id === BFS) {
            const member = newMessage.member;

            const hasAllowedRole = member && member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const MessageUpdateLogEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03)
                        .setTitle(`A message of ${newMessage.author.tag} has been edited!`) 
                        .setURL(`https://discord.com/users/${newMessage.author.id}`)
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                        .setThumbnail(newMessage.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'User:', value: `<@${newMessage.author.id}>`, inline: true },
                            { name: 'User ID:', value: `${newMessage.author.id}`, inline: true },
                            { name: 'Message Before:', value: `${oldMessage.content.substring(0, 1024) || 'None'}`},
                            { name: 'Message After:', value: `${newMessage.content.substring(0, 1024) || 'None'}`},
                            { name: 'Message ID:', value: `${newMessage.id}`, inline: true },
                            { name: 'Link to Message:', value: `[Jump to Message](https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`, inline: true }
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

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

                    const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
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

function extractLinks(text) {
    const regex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/g;
    const matches = text.match(regex);
    return matches || [];
}
