/**Description:
 * This event is used to log the deleted message in the Bens Fintastic Sharks server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageDelete',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const BFS = '1121921556130566204'; // Bens Fintastic Sharks Server

        const allowedRoles = [
            '1122297542202363976'  // Bots Role
        ];

        const excludedChannelIds = [
            '1121922935611998219', // Moderator Only Channel
            '1179097126978986015'  // Staff Only Channel
        ];

        if (excludedChannelIds.includes(message.channel.id)) return;

        if (message.guild && message.guild.id === BFS) {

            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const MessageDeleteLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`A message of ${message.author.tag} has been deleted!`) 
                        .setURL(`https://discord.com/users/${message.author.id}`)
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                        .addFields(
                            { name: 'User:', value: `<@${message.author.id}>⠀⠀⠀⠀`, inline: true }, 
                            { name: 'User ID:', value: `${message.author.id}⠀⠀⠀⠀`, inline: true }, 
                            { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`},
                            { name: 'Message ID:', value: `${message.id}⠀⠀⠀⠀`, inline: true  }, 
                            { name: 'Channel:', value: `<#${message.channel.id}>⠀⠀⠀⠀`, inline: true}
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

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

                    const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
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
