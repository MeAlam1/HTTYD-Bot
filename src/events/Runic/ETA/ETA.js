const ExtendedClient = require('../../../class/ExtendedClient');
const RunicETAEmbed = require('../../../embed/Runic/Information/ETAEmbed.js');

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0]; 

        function isETAMessage(content) {
            const pattern = /([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|^)eta([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|$)/i;
            return pattern.test(content);
        }

        const Runic = '1151497491288690688';

        if (message.guild && message.guild.id === Runic && isETAMessage(message.content)) {
            await message.reply({ embeds: [RunicETAEmbed] });
        }
    }
};
