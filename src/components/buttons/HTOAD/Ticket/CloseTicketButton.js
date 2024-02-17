const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'close-ticket-button',
    run: async (client, interaction) => {
        const HTOADCloseTicketEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`**${interaction.channel.name}**`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
            .setDescription(`The title of this Embed will be the name of the Transcript!`)
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        const CreateTranscriptButton = new ButtonBuilder()
            .setCustomId('htoad-create-transcript-button')
            .setLabel('Create Transcript')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder().addComponents(CreateTranscriptButton, RenameTranscriptButton);

        await interaction.reply({ 
            embeds: [HTOADCloseTicketEmbed],  
            components: [row] 
        });
    }
};
