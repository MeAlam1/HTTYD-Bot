function isLeaveMessage(content) {
    return content.includes("left");
}

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {

        if (message.channel.id === '1120030527920025650') { // How to Own a Dragon Welcome Channel
            if (isLeaveMessage(message.content)) {

                const emojis = ['<:toothlessannoyed:1123725531481919488>'];

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