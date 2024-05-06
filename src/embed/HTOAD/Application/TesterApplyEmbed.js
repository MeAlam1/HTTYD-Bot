/**Description:
 * This embed used in the command /apply after selecting the Tester.
 * src\components\selects\HTOAD\Application\ApplySelect.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADTesterApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Tester Application`)
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
**4.** Do you have any prior experience with testing?
**5.** What inspired your application to How to Own a Dragon?
**6.** Is there any additional information that you wish to share?

**7.** This final question is to test your creativity.
Please write a short text/guide on how you would test a feature in a game.
The more creative the better. Hint, Think of obscure and easily forgotten features like Lightning, Potion effects like Dolphin grace etc.
    ` }
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADTesterApplyEmbed;