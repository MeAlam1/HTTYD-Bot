/**Description:
 * This embed used in the command: /help after selecting the Links category.
 * src\components\selects\General\Help\HelpCategorySelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADHelpLinksEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1120022058601029652/1182345490101186711/1182346235907149854')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .addFields(
        { name: `Links`, value: `
        **[/google-drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing)** - To open the Google Drive!
        **[/httyd](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing)** - To open the Google Drive!
    
        `},
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADHelpLinksEmbed;