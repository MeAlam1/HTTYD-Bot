/** Description:
 * This event will filter all messages sent in How to Own a Dragon.
 * It Checks them for Spam. [@everyone or @here ]
 * If @everyone or @here are found it will delete the message.
 * Send a Message in the Automod Channel.
 * Timeout the User for 7 days.
 * The Owner, Lead Dev and Bot roles are allowed to use @everyone or @here in the server.
 */

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        function isSpam(content) {
            const pattern = ['@everyone', '@here'];
            return pattern.some(spamWord => content.includes(spamWord));
        }

        const allowedRoles = [
            '1120030006626750474', // Owner Role
            '1133420066277437490', // Lead Devs Role
            '1120033014416670895'  // Bots Role
        ];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (message.guild && message.guild.id === HTOAD && isSpam(message.content)) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {
                    await message.delete();

                    const logChannelId = '1131214666757058654'; // HTOAD automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    await logChannel.send({ content: `${message.author.tag} has been timed out for using @ everyone or @ here inappropriately.` });

                    const timeoutDuration = 7 * 24 * 60 * 60 * 1000; // 7 days
                    await message.member.timeout(timeoutDuration, 'Using @  everyone or @ here inappropriately.');
                } catch (error) {
                    console.error('Error trying to delete a spam message or timeout the user: ', error);
                }
            }
        }
    }
};
