/** Description:
 * This event will automatically publish a message in the #commit channel.
 */

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {
        const Commit = "1157988227890823289";

        if (message.channel.id === Commit) {
            try {
                if (message.crosspostable) {
                    await message.crosspost();
                } else {
                }
            } catch (error) {
                console.error(`Failed to publish message: ${error}`);
            }
        }
    }
};
