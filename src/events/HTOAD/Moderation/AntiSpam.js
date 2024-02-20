module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        function isSpam(content) {
            const pattern = ['@everyone', '@here'];
            
            return pattern.some(spamWord => content.toLowerCase().includes(spamWord.toLowerCase()));
        }

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (message.guild && message.guild.id === HTOAD && isSpam(message.content)) {
            try {
                
                const timeoutDuration = 7 * 24 * 60 * 60 * 1000;
                await message.member.timeout(timeoutDuration, 'Sending spam messages');

                await message.delete();

                const LogChannel = '1131214666757058654'; // HTOAD automod channel

                await LogChannel.send({ content: `Test`});
            } catch (error) {
                console.error('Error trying to delete a spam message: ', error);
            }
        }
    }
};
