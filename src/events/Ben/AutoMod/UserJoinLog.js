/**Description:
 * This event is used to log the user join in the Bens Fintastic Sharks server.
 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberAdd',
    once: false,

    run: async (client, member) => {
        const BFS = '1121921556130566204'; // Bens Fintastic Sharks Server

        if (member.guild.id === BFS) {
            try {
                const UserJoinLogEmbed = new EmbedBuilder()
                    .setColor(0x20fc03)
                    .setTitle(`${member.user.tag} has joined the server!`)
                    .setURL(`https://discord.com/users/${member.user.id}`)
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                    .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                    .addFields(
                        { name: 'User:', value: `<@${member.user.id}>⠀⠀⠀⠀`, inline: true },
                        { name: 'User ID:', value: `${member.user.id}⠀⠀⠀⠀`, inline: true },
                        { name: 'Account Created:', value: `${member.user.createdAt.toUTCString()}`, inline: false } 
                    )
                    .setTimestamp()
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })

                const logChannelId = '1190698582781722774'; // Bens Fintastic Sharks Logging channel ID
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
