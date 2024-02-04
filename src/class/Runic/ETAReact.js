const { ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = client => {
    function isWelcomeMessage(content) {
        const keywords = ["ETA", "eta", "ETa","Eta", "eTA", "eTa", "etA"]; 
        return keywords.some(keyword => content.includes(keyword));
    }   
    

    const RunicHelpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Estimated Time of Arrival (ETA)')
    .setURL('https://discord.com/channels/1151497491288690688/1203741477424070656/1203744983912419359')
    .setAuthor({ name: 'Runic Isles', iconURL: 'https://imgur.com/KgKhMsg.png'})
    .setDescription('**NO ETA**')
    .setImage('https://imgur.com/fXMTOWW.gif')
    .setTimestamp()
    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://imgur.com/KgKhMsg.png' });embeds: [RunicHelpEmbed]

    client.on('messageCreate', async (message) => {
        const targetGuildID = '1151497491288690688';
        if (message.guild.id === targetGuildID) { 
            if (isWelcomeMessage(message.content)) {
                await message.reply({ embeds: [RunicHelpEmbed] });
            }
        }
    });
}
