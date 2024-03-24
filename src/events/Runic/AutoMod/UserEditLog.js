/**Description:
 * This event is used to log the user's role changes, username changes, and nickname changes.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberUpdate',
    once: false,

    run: async (client, oldMember, newMember) => {
        const Runic = '1151497491288690688'; // Runic Isles Server

        const excludedRoles = [
            '1151622963213377596', // Member Role
            '1152751120901480528', // Polls Role
            '1151642778141470873', // Sneakpeek Role
            '1151572475281424514', // Bubblehorn Role

        ];

        if (newMember.guild.id === Runic) {
            try {
                const oldRoles = oldMember.roles.cache;
                const newRoles = newMember.roles.cache;
                const addedRoles = newRoles.filter(role => !oldRoles.has(role.id) && !excludedRoles.includes(role.id)); 
                const removedRoles = oldRoles.filter(role => !newRoles.has(role.id) && !excludedRoles.includes(role.id));

                if (addedRoles.size > 0) {
                    addedRoles.forEach(async (role) => {
                        const UserRoleAddLogEmbed = new EmbedBuilder()
                            .setColor(0x20fc03)
                            .setTitle(`${newMember.user.tag} received a new role!`)
                            .setURL(`https://discord.com/users/${newMember.user.id}`)
                            .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                            .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                        const logChannelId = '1151645114146488390';  // Runic Isles log channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        await logChannel.send({ embeds: [UserRoleAddLogEmbed] });
                    });
                }
                
                // Handle removed roles
                if (removedRoles.size > 0) {
                    removedRoles.forEach(async (role) => {
                        const UserRoleRemoveLogEmbed = new EmbedBuilder()
                            .setColor(0xbf020f)
                            .setTitle(`${newMember.user.tag} lost a role!`)
                            .setURL(`https://discord.com/users/${newMember.user.id}`)
                            .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                            .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                        const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        await logChannel.send({ embeds: [UserRoleRemoveLogEmbed] });
                    });
                }

                if (oldMember.user.tag !== newMember.user.tag) {
                    const userNameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) 
                        .setTitle(`The Username of ${newMember.user.tag} has been changed!`)
                        .setURL(`https://discord.com/users/${newMember.user.id}`)
                        .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Username:⠀⠀⠀⠀', value: oldMember.user.tag, inline: true },
                            { name: 'New Username:', value: newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                        const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
                        const logChannel = await client.channels.fetch(logChannelId);
                        
                    await logChannel.send({ embeds: [userNameChangeEmbed] });
                }

                if (oldMember.nickname !== newMember.nickname) {
                    const userNicknameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) // 
                        .setTitle(`The Nickname of ${newMember.user.tag} has been changed!`)
                        .setURL(`https://discord.com/users/${newMember.user.id}`)
                        .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Nickname:⠀⠀⠀⠀', value: oldMember.nickname ? oldMember.nickname : oldMember.user.tag, inline: true },
                            { name: 'New Nickname:', value: newMember.nickname ? newMember.nickname : newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });
                
                    const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
                    const logChannel = await client.channels.fetch(logChannelId);
                    
                    await logChannel.send({ embeds: [userNicknameChangeEmbed] });
                }
                
            } catch (error) {
                console.error('Error trying to log role changes: ', error);
            }
        }
    }
};
