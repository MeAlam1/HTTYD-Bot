/**Description:
 * This embed used in the command: /eta
 * src\commands\Public\MinecraftMod\eta.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADETAEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Estimated Time of Arrival (ETA)')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('The first Alpha already has been released!')
    .addFields(
        { name: 'Links', value: `**[Curseforge](https://www.curseforge.com/minecraft/mc-mods/how-to-own-a-dragon)** - To open the Curseforge page!
        **[Github](https://github.com/MeAlam1/How-to-Own-a-Dragon)** - To open the Github page!` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADETAEmbed;