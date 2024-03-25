/**Description:
 * This embed used in the command: /download
 * src\commands\Public\MinecraftMod\download.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADDownloadEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Download Links!')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .addFields(
        { name: 'Links', value: `**[Curseforge](https://www.curseforge.com/minecraft/mc-mods/how-to-own-a-dragon)** - To open the Curseforge page!
        **[Github](https://github.com/MeAlam1/How-to-Own-a-Dragon)** - To open the Github page!` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADDownloadEmbed;