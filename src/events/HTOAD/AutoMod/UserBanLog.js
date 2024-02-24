const { EmbedBuilder } = require('discord.js');

module.exports = {
event: 'guildBanAdd',
    once: false,
    run: async (client, ban) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (ban.guild.id === HTOAD) {
            try {
                const user = ban.user;
                const BanLogEmbed = new EmbedBuilder()
                    .setColor(0xff0000) // Red for ban
                    .setTitle(`${user.tag} was banned`)
                    .setURL(`https://discord.com/users/${user.id}`) // The URL of the User Profile
                    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                    .setDescription(`A member was banned from the server!`)
                    .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of the user
                    .addFields(
                        { name: 'Moderator who banned:', value: `\u200B`, inline: false },
                        { name: 'User:', value: `${user.username}`, inline: true },
                        { name: 'User ID:', value: `${user.id}`, inline: true }
                    )
                    .setTimestamp()
                    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                // Message sent in the log channel.
                await logChannel.send({
                    embeds: [BanLogEmbed]
                });
            } catch (error) {
                console.error('Error trying to log the user ban: ', error);
            }
        }
    }
}