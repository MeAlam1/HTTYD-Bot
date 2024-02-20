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
                await message.delete();
                await message.send('Your message was detected as spam and was removed.');
            } catch (error) {
                console.error('Error trying to delete a spam message: ', error);
            }
        }
    }
};
