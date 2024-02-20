module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        function isSpam(content) {
            const pattern = ['@everyone', '@here'];
            return pattern.some(spamWord => content.includes(spamWord));
        }

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (message.guild && message.guild.id === HTOAD && isSpam(message.content)) {
            try {
                await message.delete();

                const logChannelId = '1131214666757058654'; // HTOAD automod channel ID
                const logChannel = await client.channels.fetch(logChannelId);

                await logChannel.send({ content: `${message.author.tag} has been timed out for using @ everyone or @ here inappropriately.` });

                await message.member.timeout(600000, 'Using @ everyone or @ here inappropriately.');
            } catch (error) {
                console.error('Error trying to delete a spam message or timeout the user: ', error);
            }
        }
    }
};
