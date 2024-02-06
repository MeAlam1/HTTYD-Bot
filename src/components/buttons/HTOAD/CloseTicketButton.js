const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'close-ticket-button',
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Your Title Here')
            .setDescription('Your description here.');

        const button1 = new ButtonBuilder()
            .setCustomId('button1_custom_id')
            .setLabel('Button 1')
            .setStyle(ButtonStyle.Primary);

        const button2 = new ButtonBuilder()
            .setCustomId('button2_custom_id')
            .setLabel('Button 2')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder().addComponents(button1, button2);

        await interaction.reply({ 
            embeds: [embed], 
            components: [row] 
        });
    }
};
