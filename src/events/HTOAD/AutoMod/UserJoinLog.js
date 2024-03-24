/**Description:
 * This event is used to log the user join in the How to Own a Dragon server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberAdd',
    once: false,

    run: async (client, member) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (member.guild.id === HTOAD) {
            try {
                const UserJoinLogEmbed = new EmbedBuilder()
                    .setColor(0x20fc03)
                    .setTitle(`${member.user.tag} has joined the server!`)
                    .setURL(`https://discord.com/users/${member.user.id}`)
                    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png' })
                    .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                    .addFields(
                        { name: 'User:', value: `<@${member.user.id}>⠀⠀⠀⠀`, inline: true },
                        { name: 'User ID:', value: `${member.user.id}⠀⠀⠀⠀`, inline: true },
                        { name: 'Account Created:', value: `${member.user.createdAt.toUTCString()}`, inline: false } 
                    )
                    .setTimestamp()
                    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

                const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({
                    embeds: [UserJoinLogEmbed]
                });
            } catch (error) {
                console.error('Error trying to log the user join: ', error);
            }
        }
    }
};
