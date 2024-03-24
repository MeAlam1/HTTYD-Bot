/**Description:
 * This embed used in the command: /help
 * src\commands\Public\Help\help.js
 */

const { EmbedBuilder } = require('discord.js');

const RunicHelpCategoryEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1151497491288690688/1203741477424070656/1203744983912419359')
    .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
    .addFields(
        { name: `Category's`, value: `**Links** - All Commands related to links!
        **Mod** - All Commands related to the mod!
        ` },
    )
    .setTimestamp()
    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

module.exports = RunicHelpCategoryEmbed;