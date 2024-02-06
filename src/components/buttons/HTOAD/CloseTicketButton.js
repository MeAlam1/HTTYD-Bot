const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'close-ticket-button',
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Transcript')
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
            .setDescription(`The Transcript will be named: **${interaction.channel.name}**`)
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        const button1 = new ButtonBuilder()
            .setCustomId('htoad-create-transcript-button')
            .setLabel('Create Transcript')
            .setStyle(ButtonStyle.Success);

        const button2 = new ButtonBuilder()
            .setCustomId('htoad-rename-transcript-button')
            .setLabel('Rename Transcript')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder().addComponents(button1, button2);

        await interaction.reply({ 
            embeds: [embed],  
            components: [row] 
        });
    }
};
