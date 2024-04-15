/**Description:
 * This event is used to log the user's role changes, username changes, and nickname changes.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberUpdate',
    once: false,

    run: async (client, oldMember, newMember) => {
        const BFS = '1121921556130566204'; // Bens Fintastic Sharks Server

        const excludedRoles = [

        ];

        if (newMember.guild.id === BFS) {
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
                            .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                                .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                        const logChannelId = '1211052643288612874';  // Bens Fintastic Sharks user-automod channel ID
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
                            .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: '\u200B', value: '\u200B', inline: true },
                                { name: 'Role:', value: `<@&${role.id}>`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                                .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                            const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        await logChannel.send({ embeds: [UserRoleRemoveLogEmbed] });
                    });
                }

                if (oldMember.user.tag !== newMember.user.tag) {
                    const userNameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) 
                        .setTitle(`The Username of ${newMember.user.tag} has been changed!`)
                        .setURL(`https://discord.com/users/${newMember.user.id}`)
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Username:⠀⠀⠀⠀', value: oldMember.user.tag, inline: true },
                            { name: 'New Username:', value: newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                            .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                            const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
                        const logChannel = await client.channels.fetch(logChannelId);
                        
                    await logChannel.send({ embeds: [userNameChangeEmbed] });
                }

                if (oldMember.nickname !== newMember.nickname) {
                    const userNicknameChangeEmbed = new EmbedBuilder()
                        .setColor(0xfc6f03) // 
                        .setTitle(`The Nickname of ${newMember.user.tag} has been changed!`)
                        .setURL(`https://discord.com/users/${newMember.user.id}`)
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                        .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                        .addFields(
                            { name: 'Previous Nickname:⠀⠀⠀⠀', value: oldMember.nickname ? oldMember.nickname : oldMember.user.tag, inline: true },
                            { name: 'New Nickname:', value: newMember.nickname ? newMember.nickname : newMember.user.tag, inline: true },
                        )
                        .setTimestamp()
                            .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                
                        const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
                    const logChannel = await client.channels.fetch(logChannelId);
                    
                    await logChannel.send({ embeds: [userNicknameChangeEmbed] });
                }
                
            } catch (error) {
                console.error('Error trying to log role changes: ', error);
            }
        }
    }
};
