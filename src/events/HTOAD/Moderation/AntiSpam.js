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
            // The list of words that the message will be checked for.
            const pattern = ['@everyone', '@here'];
            return pattern.some(spamWord => content.includes(spamWord));
        }

        const allowedRoles = [
            '1120030006626750474', // Owner
            '1133420066277437490', // Lead Devs 
            '1120033014416670895'  // Bots 
        ];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (message.guild && message.guild.id === HTOAD && isSpam(message.content)) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {

                    // Delete the Spam message.
                    await message.delete();

                    const logChannelId = '1131214666757058654'; // How to Own a Dragon automod channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    // Message sent in the log channel.
                    await logChannel.send({ content: `${message.author.tag} has been timed out for using @ everyone or @ here inappropriately.` });

                    // Timeout duration in milliseconds.(7 Days)
                    const timeoutDuration = 7 * 24 * 60 * 60 * 1000; 

                    // Message in Audit Log.
                    await message.member.timeout(timeoutDuration, 'Using `@everyone` or `@here` inappropriately.');
                } catch (error) {
                    console.error('Error trying to delete a spam message or timeout the user: ', error);
                }
            }
        }
    }
};
