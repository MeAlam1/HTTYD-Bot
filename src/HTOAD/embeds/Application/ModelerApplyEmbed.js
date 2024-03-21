/**Description:
 * This embed used in the command /apply after selecting the Modeler.
 * src\HTOAD\selects\Application\ApplySelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADModelerApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Modeler Application`)
    .setURL('https://discord.com/channels/1120022058601029652/1120088926737141923/1120095097061658685')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .addFields(
        { name: `Thank you for applying to How to Own a Dragon!`, value: `
        Please answer the following questions to start your application process.
    ` },
    { name: `Question list:`, value: `
        **1.** What should we call you? 
        **2.** How old are you?
        **3.** What timezone are you in?
        **4.** Do you have any prior experience with modeling?
        **5.** Do you have any prior experience with Blockbench?
        **6.** Do you have any examples of your work?
        **7.** What inspired your application to How to Own a Dragon?
        **8.** Is there any additional information that you wish to share?
    ` }
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADModelerApplyEmbed;