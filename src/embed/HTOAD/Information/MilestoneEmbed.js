/**Description:
 * This embed used in the command: /faq en /info
 * src\commands\Public\MinecraftMod\faq.js
 * src\components\selects\HTOAD\Information\FaqSelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADFAQEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Milestone')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
    ~~_                                                                                                    _~~
    # Milestones:
    Start of this mod: <t:1686998820> 
    ~~_                                                                                                    _~~
    ## Members:
    100 Members: <t:1689688200>
    250 Members: <t:1693775760> 
    500 Members: <t:1697305800>
    750 Members: <t:1700934125> 
    1000 Members:
    <t:1704014820:f>
    ~~_                                                                                                    _~~
    ## Downloads:
    100 Downloads: <t:1693980120> 
    250 Downloads: <t:1701700750> 
    ~~_                                                                                                    _~~
    ## Mod:
    First Alpha: <t:1689615000>
    5th Alpha: <t:1697738940>
`)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADFAQEmbed;