const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652'];

const HTOADGoogleDriveEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Google Drive')
    .setURL('https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('[Google Drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing) - Click here to open the Google Drive!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('google-drive')
        .setDescription('To open the Google Drive!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADGoogleDriveEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

