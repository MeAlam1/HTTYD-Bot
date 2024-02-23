/**Description: 
 * This Event will filter all messages sent in Runic Public server.
 * It Checks them for ETA.
 * If ETA is found it will send a message in the channel.
 */

const RunicETAEmbed = require('../../../embed/Runic/Information/ETAEmbed.js');

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0]; 

        function isETAMessage(content) {
            /**
             * The list of words that the message will be checked for.
             * The pattern will check for the word "eta" in the message.
             * will also flag with Spaces, Punctuation and Special Characters.
             * Case insensitive.
             */
            const pattern = /([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|^)eta([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|$)/i;
            return pattern.test(content);
        }

        const Runic = '1151497491288690688'; // Runic Isles Public Server

        if (message.guild && message.guild.id === Runic && isETAMessage(message.content)) {
            
            // Send an embed in the channel.
            await message.reply({ embeds: [RunicETAEmbed] });
        }
    }
};
