function isLeaveMessage(content) {
    return content.includes("now");
}

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {

        if (message.channel.id === '1151500497950363648') { // Runic Isles Public Server Goodbye Channel
            if (isLeaveMessage(message.content)) {

                const emojis = ['<:bhevil:1151933344804782161>'];

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