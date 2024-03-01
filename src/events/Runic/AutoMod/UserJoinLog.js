/**Description:
 * This event is used to log the user join in the Runic Isles server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberAdd',
    once: false,

    run: async (client, member) => {
        const Runic = '1151497491288690688'; // Runic Isles Server

        if (member.guild.id === Runic) {
            try {
                const UserJoinLogEmbed = new EmbedBuilder()
                    .setColor(0x20fc03)
                    .setTitle(`${member.user.tag} has joined the server!`)
                    .setURL(`https://discord.com/users/${member.user.id}`)
                    .setAuthor({ name: 'Runic Isles', iconURL: 'https://imgur.com/KgKhMsg.png'})
                    .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                    .addFields(
                        { name: 'User:', value: `<@${member.user.id}>⠀⠀⠀⠀`, inline: true },
                        { name: 'User ID:', value: `${member.user.id}⠀⠀⠀⠀`, inline: true },
                        { name: 'Account Created:', value: `${member.user.createdAt.toUTCString()}`, inline: false } 
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://imgur.com/KgKhMsg.png' });

                const logChannelId = '1151645114146488390'; // Runic Isles Log channel ID
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
