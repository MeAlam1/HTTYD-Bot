/**Description:
 * This embed used in the event: TempVC
 * src\events\HTOAD\TempVC\TempVC.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADInterfaceEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Temp VC Interface')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setDescription(`
This message is used to interact with the Temp VC system. 
Press the buttons below to manage your Temp VC.`)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADInterfaceEmbed;