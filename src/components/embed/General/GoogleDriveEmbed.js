const { EmbedBuilder } = require('discord.js');

const GoogleDriveEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Google Drive')
    .setURL('https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('[Google Drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing) - Click here to open the Google Drive!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = GoogleDriveEmbed;