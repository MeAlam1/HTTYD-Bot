/**Description:
 * This event will filter all messages sent in Runic Public server.
 * It Checks them for Spam. [@everyone or @here ]
 * If @everyone or @here are found it will delete the message.
 * Send a Message in the Automod Channel.
 * Timeout the User for 7 days.
 * The Owner, Management, Moderator, Team Leader, Mod developer and Bots roles are allowed to use @everyone or @here in the server.
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
            '1151500042843201576', // Server Owner Role
            '1189510610556301332', // Server Management Role
            '1203303940364439573', // Server Moderator Role
            '1202369001779499129', // Team Leader Role
            '1151500178331807896', // Mod developer Role
            '1151571613440020631'  // Bots Role
        ];

        const Runic = '1151497491288690688'; // Runic Public server

        if (message.guild && message.guild.id === Runic && isSpam(message.content)) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {
                    
                    // Delete the Spam message.
                    await message.delete();

                    const logChannelId = '1151645114146488390'; // Runic Public log channel
                    const logChannel = await client.channels.fetch(logChannelId);

                    // Message sent in the log channel.
                    await logChannel.send({ content: `${message.author.tag} has been timed out for using @ everyone or @ here inappropriately.` });

                    // Timeout duration in milliseconds.(7 Days)
                    const timeoutDuration = 7 * 24 * 60 * 60 * 1000;
                    
                    // Message in Audit Log.
                    await message.member.timeout(timeoutDuration, 'Using @  everyone or @ here inappropriately.');
                } catch (error) {
                    console.error('Error trying to delete a spam message or timeout the user: ', error);
                }
            }
        }
    }
};
