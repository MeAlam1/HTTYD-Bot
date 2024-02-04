const { ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');
const RunicETAEmbed = require('../../components/embed/Runic/ETAEmbed.js');

module.exports = client => {
    function isWelcomeMessage(content) {
        const keywords = ["ETA", "eta", "ETa","Eta", "eTA", "eTa", "etA"]; 
        return keywords.some(keyword => content.includes(keyword));
    }   

    client.on('messageCreate', async (message) => {
        const targetGuildID = '1151497491288690688';
        if (message.guild.id === targetGuildID) { 
            if (isWelcomeMessage(message.content)) {
                await message.reply({ embeds: [RunicETAEmbed] });
            }
        }
    });
}
