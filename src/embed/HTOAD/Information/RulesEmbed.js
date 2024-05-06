/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 */

const { EmbedBuilder } = require('discord.js');

const RulesEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Rules!')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
Please remember to adhere to Discord's [Terms of Service](https://discord.com/terms) and [Privacy Policy](https://discord.com/privacy) at all times.

**General Rules:**
1. Respect all server members.
2. No discrimination is tolerated.
3. Keep content safe for work - no NSFW in the server or DMs.
4. Avoid spamming in the server or DMs.
5. Advertisements require permission from Lead Devs or higher ranks.
6. Use appropriate channels for conversations; general discussions should go in <#1120032310197231646>.
7. Discussions about other projects are allowed only if they're related to HTOAD.
8. Please communicate in English.
9. We are not a support desk for general Minecraft/HTTYD/Discord inquiries; use other resources like Google.
10. Avoid repeating questions already answered in <#1120302121980543007> or <#1182345490101186711>.
11. Respect Roles - if they indicate No ping/No DM, comply with that.
12. Do not request Roles from staff.
13. Allow staff to handle situations without interference.

**Enforcement System**
Our server enforces rules through a 3-step system:
- 1st offense: Timeout.
- 2nd offense: Timeout or Kick, depending on the severity.
- 3rd offense: Ban.

*Note:* 
Enforcement may vary based on the context of the situation.
    `)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = RulesEmbed;