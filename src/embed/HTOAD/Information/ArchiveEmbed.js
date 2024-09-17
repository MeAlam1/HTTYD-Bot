/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 */

const { EmbedBuilder } = require('discord.js');

const ChannelsEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Archive!')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
## Archive
<#1136677313967300730> - A look back at the old Helper Applications. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1209137446369886258
<#1158305505660383232> - A look back at the old Developer Applications. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1209137446369886258
<#1166785959417884694> - A look back at the Server Banner contest from November 2023.
<#1148738960693153882> - Reflecting on when <@&1120030006626750474> used to do recaps. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1197595787807436880
<#1123664502995570838> & <#1152747457311146034> - Reminiscing about our Meme channels era. Closure details: https://discord.com/channels/1120022058601029652/1127173809032663110/1198692115429986396
<#1152747429083492363> - Remembering the times when our showcases were divided into two separate channels. Closed due to: https://discord.com/channels/1120022058601029652/1127173809032663110/1198692115429986396
<#1199697255993720862> - A look back at the Server Logo contest from February 2024.

Future channel additions are a possibility!

For any errors, please contact <@397416283835990016>.
    `)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = ChannelsEmbed;