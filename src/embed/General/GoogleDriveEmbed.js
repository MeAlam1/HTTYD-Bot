/**Description:  
 * This Embed used in the commands: /google-drive and /httyd
 * src\commands\Public\HTTYDContent\googleDrive.js
 * src\commands\Public\HTTYDContent\httyd.js
 */


const { EmbedBuilder } = require('discord.js');

const GoogleDriveEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('How to Train your Dragon Content')
    .setURL('https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/oAi74ES.png')
    .setDescription('[Google Drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing) - Click here to open the Google Drive!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = GoogleDriveEmbed;