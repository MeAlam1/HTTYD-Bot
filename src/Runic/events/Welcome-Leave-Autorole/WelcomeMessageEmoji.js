function isWelcomeMessage(content) {
    return content.includes("Runic");
}

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {

        if (message.channel.id === '1151500458410647633') { // Runic Isle Public Server Welcome Channel
            if (isWelcomeMessage(message.content)) {
                
                const emojis = ['<:cwShook:1152586423266988052> '];

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