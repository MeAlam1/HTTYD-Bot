const RunicETAEmbed = require('../../components/embed/Runic/ETAEmbed.js');

module.exports = client => {
    function isETAMessage(content) {

        const pattern = /(^|\s)eta[.,!?]?(\s|$)/i; 
        
        return pattern.test(content);
    }
    

    client.on('messageCreate', async (message) => {

        const Runic = '1151497491288690688'; // Runic Isles Public Server

        if (message.guild.id === Runic) { 
            if (isETAMessage(message.content)) {
                await message.reply({ embeds: [RunicETAEmbed] });
            }
        }
    });
}
