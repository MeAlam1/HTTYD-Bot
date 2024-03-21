function isWelcomeMessage(content) {
    return content.includes("Hello");
}

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {

        if (message.channel.id === '1150753214510149684') { // Ravenstone Peak Welcome Channel
            if (isWelcomeMessage(message.content)) {

                const emojis = ['<:pwease:1150933470462365726>'];

                for (const emoji of emojis) {
                    try {
                        await message.react(emoji);
                    } catch (error) {
                        console.error(`Error reacting with emoji ${emoji}:`, error.message);
                    }
                }
            }
        }
    }
};