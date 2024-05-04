/**Description:
 * This embed used in the command /apply after selecting the Modeler.
 * src\components\selects\HTOAD\Application\ApplySelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADGameDesignApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Game Designer Application`)
    .setURL('https://discord.com/channels/1120022058601029652/1120088926737141923/1120095097061658685')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .addFields(
        { name: `Thank you for applying to How to Own a Dragon!`, value: `
        Please answer the following questions to start your application process.
    ` },
    { name: `Question list:`, value: `
**1.** What should we call you? 
**2.** How old are you?
**3.** What timezone are you in?
**4.** Do you have any prior experience with Designing games?
**6.** Do you have any examples of your work?
**7.** What inspired your application to How to Own a Dragon?
**8.** Is there any additional information that you wish to share?

**9.** The final question is a design challenge!
Could you create a document that lists all the dragon species from the first movie? 
Please include the following dragons: Gronckle, Night Fury, Deadly Nadder, Hideous Zippleback, Monstrous Nightmare, and Terrible Terror. 
For each dragon, specify the biomes in which they should appear, the typical group sizes, their rarity, and provide an explanation for each choice. 
Also, note if any special variants of these dragons should spawn in different biomes.
    ` }
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADGameDesignApplyEmbed;