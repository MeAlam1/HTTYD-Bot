/**Description:
 * This event is used to log the deleted message in the Runic Isles Server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageDelete',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const Runic = '1151497491288690688'; // Runic Isles Server

        const allowedRoles = [
            '1151571613440020631'  // Bots Role
        ];

        const excludedChannelIds = [
            '1120026059686019193', // Moderator Only Channel
            '1134586375140802600', // Admin Discuss Channel
            '1131196059608174705' // Important Admin Channel
        ];

        if (excludedChannelIds.includes(message.channel.id)) return;

        if (message.guild && message.guild.id === Runic) {

            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id)); 
            if (!hasAllowedRole) {
                try {
                    const MessageDeleteLogEmbed = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`A message of ${message.author.tag} has been deleted!`) 
                        .setURL(`https://discord.com/users/${message.author.id}`)
                        .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                        .addFields(
                            { name: 'User:', value: `<@${message.author.id}>⠀⠀⠀⠀`, inline: true }, 
                            { name: 'User ID:', value: `${message.author.id}⠀⠀⠀⠀`, inline: true }, 
                            { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`},
                            { name: 'Message ID:', value: `${message.id}⠀⠀⠀⠀`, inline: true  }, 
                            { name: 'Channel:', value: `<#${message.channel.id}>⠀⠀⠀⠀`, inline: true}
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

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

                    const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
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
