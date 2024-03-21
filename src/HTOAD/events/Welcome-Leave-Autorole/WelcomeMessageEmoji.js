function isWelcomeMessage(content) {
    return content.includes("Hello");
}

module.exports = {
    event: 'messageCreate',
    once: false,
    
    run: async (client, message) => {

        if (message.channel.id === '1120030527920025650') { // How to Own a Dragon Welcome Channel
            if (isWelcomeMessage(message.content)) {

                const emojis = ['<:blaeh:1159184786250809475>'];

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
}