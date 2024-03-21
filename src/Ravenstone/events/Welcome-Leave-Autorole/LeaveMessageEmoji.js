function isLeaveMessage(content) {
    return content.includes("left");
}

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {

        if (message.channel.id === '1150753214510149684') { // Ravenstone Peak Test
            if (isLeaveMessage(message.content)) {

                const emojis = ['<:agony:1150855986622496879>'];

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