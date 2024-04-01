/**Description:
 * This embed used in the command: /Info
 * src\commands\Public\MinecraftMod\faq.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADFAQEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Google Drive Progress')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
    **The drive**
    https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing

    **On the Drive**
    *Movies:*
    How to Train Your Dragon, (With Subtitles)
    How to Train Your Dragon 2,
    How to Train Your Dragon: The Hidden World,

    *Specials:*
    Book of Dragons,
    Dawn of the Dragon Racers, (With Subtitles)
    Dreamworks Dragons: Gift of the Nightfury,
    How to Train Your Dragon: Homecoming,
    How to Train Your Dragon: Snoggletog Log,
    Legend of the Boneknapper Dragon, (With Subtitles)

    *Series*
    Dragons: Riders of Berk,
    Dragons: Defenders of Berk,
    Dragons: Race to the Edge Season 1,
    Dragons: Race to the Edge Season 2,
    Dragons: Race to the Edge Season 3,
    Dragons: Race to the Edge Season 4,
    Dragons: Race to the Edge Season 5,
    Dragons: Race to the Edge Season 6,

    **Upcoming**
    *Series*
    DreamWorks Dragons:  The Nine Realms,
    Dragons: Rescue Riders,
    Dragons Rescue Riders: Heroes of the Sky,

    **The drive**
    https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing`)
    
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADFAQEmbed;