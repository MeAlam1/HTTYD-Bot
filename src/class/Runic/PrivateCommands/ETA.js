const RunicETAEmbed = require('../../../embed/Runic/Information/ETAEmbed');

module.exports = client => {
    function isETAMessage(content) {

        const pattern = /([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|^)eta([.,!?~*@#$%^&()_\-{}+=:;"'</?|`\s]|$)/i;
        
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
