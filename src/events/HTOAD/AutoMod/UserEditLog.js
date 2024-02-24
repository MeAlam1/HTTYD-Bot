const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'guildMemberUpdate',
    once: false,

    run: async (client, oldMember, newMember) => {
        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (newMember.guild.id === HTOAD) {
            try {
                // Find the role(s) that were added by comparing the old member's roles with the new member's roles
                const oldRoles = oldMember.roles.cache;
                const newRoles = newMember.roles.cache;
                const addedRoles = newRoles.filter(role => !oldRoles.has(role.id));

                // Proceed only if there's at least one added role
                if (addedRoles.size > 0) {
                    // Creating an embed for each added role (or you could modify this to send one embed with all added roles)
                    addedRoles.forEach(async (role) => {
                        const UserRoleAddLogEmbed = new EmbedBuilder()
                            .setColor(0x20fc03) // Green color for role addition
                            .setTitle(`${newMember.user.tag} received a new role`)
                            .setURL(`https://discord.com/users/${newMember.user.id}`) // The URL of the User Profile
                            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                            .setDescription(`A member received a new role!`)
                            .setThumbnail(newMember.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of the user
                            .addFields(
                                { name: 'User:', value: `<@${newMember.user.id}>`, inline: true },
                                { name: 'User ID:', value: `${newMember.user.id}`, inline: true },
                                { name: 'Role:', value: `${role.name}`, inline: true },
                                { name: 'Role ID:', value: `${role.id}`, inline: true },
                            )
                            .setTimestamp()
                            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

                        const logChannelId = '1211052643288612874'; // How to Own a Dragon user-automod channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        // Message sent in the log channel.
                        await logChannel.send({
                            embeds: [UserRoleAddLogEmbed]
                        });
                    });
                }
            } catch (error) {
                console.error('Error trying to log role addition: ', error);
            }
        }
    }
};
