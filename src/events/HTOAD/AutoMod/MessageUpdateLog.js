const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageUpdate',
    once: false,

    run: async (client, oldMessage, newMessage) => {
        
        if (oldMessage.content === newMessage.content && oldMessage.attachments.size === newMessage.attachments.size && oldMessage.attachments.every((value, key) => newMessage.attachments.has(key))) return;

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

                    // Initialize variables for attachments comparison
                    let attachmentComparisonContent = "";
                    
                    // Old Attachments
                    if (oldMessage.attachments.size > 0) {
                        attachmentComparisonContent += "Old Attachments:\n";
                        oldMessage.attachments.forEach((attachment) => {
                            attachmentComparisonContent += `${attachment.url}\n`;
                        });
                    }

                    // New Attachments
                    if (newMessage.attachments.size > 0) {
                        attachmentComparisonContent += "\nNew Attachments:\n";
                        newMessage.attachments.forEach((attachment) => {
                            attachmentComparisonContent += `${attachment.url}\n`;
                        });
                    }

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    // Message sent in the log channel.
                    await logChannel.send({
                        embeds: [EditLog]
                    });
                    if (attachmentComparisonContent) {
                        await logChannel.send(attachmentComparisonContent);
                    }
                } catch (error) {
                    console.error('Error trying to log the edited message ', error);
                }
            }
        }
    }
};
