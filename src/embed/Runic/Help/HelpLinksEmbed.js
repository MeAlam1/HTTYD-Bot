/**Description:
 * This embed used in the command: /help after selecting the Links category.
 * src\components\selects\General\Help\HelpCategorySelect.js
 */

const { EmbedBuilder } = require('discord.js');

const RunicHelpLinksEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1151497491288690688/1203741477424070656/1203744983912419359')
    .setAuthor({ name: 'Runic Isles', iconURL: 'https://imgur.com/KgKhMsg.png'})
    .addFields(
        { name: 'Links', value: `**/eta** - Check if we released the Mod!
        **[/google-drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing)** - To open the Google Drive!
        **[/httyd](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing)** - To open the Google Drive!
        ` },
    )
    .setTimestamp()
    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://imgur.com/KgKhMsg.png' });

module.exports = RunicHelpLinksEmbed;