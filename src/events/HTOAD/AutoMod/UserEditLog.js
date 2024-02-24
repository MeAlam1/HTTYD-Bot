const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberUpdate',
    once: false,

    run: async (client, oldMember, newMember) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        const excludedRoles = [
            '1120099102298996876', // Dragons Role
            '1120033014416670895', // Bots Role
            '1158395515713626172', // Position Role Category
            '1158393719440031895', // Pings Role Category
            '1120087105192874136', // Development Ping Role
            '1120090448954921021', // Sneakpeek Ping Role
            '1120101850683809812', // Changelog Ping Role
            '1133106343822250054', // Wiki Ping Role
            '1124100403055820920', // Polls Role
            '1158394497244336170', // Pronouns Role Category
            '1120089922326499470', // He/Him Role
            '1120089956979847209', // She/Her Role
            '1120090011904249856', // They/Them Role
            '1120090187490398319', // Other Role
            '1158394548838477956', // Personal Role Category
            '1141453534500503773', // Fine to Ping Role
            '1141453579182424228', // Ask to Ping Role
            '1141453619531620512', // No Ping Role
            '1141453727874682930', // Fine to DM Role
            '1141453691371667556', // Ask to DM Role
            '1141453659553669170'  // No DM Role

        ];

        if (newMember.guild.id === HTOAD) {
            try {
                const oldRoles = oldMember.roles.cache;
                const newRoles = newMember.roles.cache;
                const addedRoles = newRoles.filter(role => !oldRoles.has(role.id) && !excludedRoles.includes(role.id)); 
                const removedRoles = oldRoles.filter(role => !newRoles.has(role.id) && !excludedRoles.includes(role.id));

                if (addedRoles.size > 0) {
                    addedRoles.forEach(async (role) => {
                        const UserRoleAddLogEmbed = new EmbedBuilder()
                            .setColor(0x20fc03) // Green color for role addition
                            .setTitle(`${newMember.user.tag} received a new role`)
                            .setURL(`https://discord.com/users/${newMember.user.id}`)
                            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                            .setDescription(`A member received a new role!`)
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                        const logChannelId = '1211052643288612874'; // Log channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        await logChannel.send({ embeds: [UserRoleAddLogEmbed] });
                    });
                }
                
                // Handle removed roles
                if (removedRoles.size > 0) {
                    removedRoles.forEach(async (role) => {
                        const UserRoleRemoveLogEmbed = new EmbedBuilder()
                            .setColor(0xbf020f) // Red color for role removal
                            .setTitle(`${newMember.user.tag} lost a role`)
                            .setURL(`https://discord.com/users/${newMember.user.id}`)
                            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                            .setDescription(`A member lost a role!`)
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                        const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        await logChannel.send({ embeds: [UserRoleRemoveLogEmbed] });
                    });
                }

                if (oldMember.user.tag !== newMember.user.tag) {
                    const userNameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) 
                        .setTitle(`Username Change Detected`)
                        .setDescription(`<@${oldMember.user.id}> has changed their username to ${newMember.user.tag}`)
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Username:', value: oldMember.user.tag, inline: true },
                            { name: 'New Username:', value: newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                        const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                        const logChannel = await client.channels.fetch(logChannelId);
                        
                    await logChannel.send({ embeds: [userNameChangeEmbed] });
                }

                if (oldMember.nickname !== newMember.nickname) {
                    const userNicknameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) // 
                        .setTitle(`Nickname Change Detected`)
                        .setDescription(`<@${oldMember.user.id}> has changed their nickname.`)
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Nickname:', value: oldMember.nickname ? oldMember.nickname : oldMember.user.tag, inline: true },
                            { name: 'New Nickname:', value: newMember.nickname ? newMember.nickname : newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });
                
                    const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);
                    
                    await logChannel.send({ embeds: [userNicknameChangeEmbed] });
                }
                
            } catch (error) {
                console.error('Error trying to log role changes: ', error);
            }
        }
    }
};
