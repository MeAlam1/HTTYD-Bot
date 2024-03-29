/**Description:
 * This embed is Send when someone uses the word "ETA" in the Runic Isles Public Server.
 * src\events\Runic\ETA\ETA.js
 */

const { EmbedBuilder } = require('discord.js');

const RunicETAEmbed = new EmbedBuilder()
.setColor(0x0099FF)
.setTitle('Estimated Time of Arrival (ETA)')
.setURL('https://discord.com/channels/1151497491288690688/1203741477424070656/1203744983912419359')
.setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png'})
.setDescription('**NO ETA**')
.setImage('https://imgur.com/fXMTOWW.gif')
.setTimestamp()
.setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

module.exports = RunicETAEmbed;
