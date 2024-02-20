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
            '1151500042843201576', // Owner
            '1189510610556301332', // Management
            '1203303940364439573', // Moderator
            '1202369001779499129', // Team Leader
            '1151500178331807896', // Mod developer
            '1151571613440020631'  // Bots
        ];

        const Runic = '1151497491288690688'; // Runic Public server

        if (message.guild && message.guild.id === Runic && isSpam(message.content)) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {
                    await message.delete();

                    const logChannelId = '1151645114146488390'; // Runic Public log channel
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
