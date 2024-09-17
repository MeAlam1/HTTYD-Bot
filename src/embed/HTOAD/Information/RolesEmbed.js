/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 */

const { EmbedBuilder } = require('discord.js');

const RolesEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Roles!')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
<@&1120030006626750474> - The Owners of both the Discord server and the mod.
<@&1133420066277437490> - The Lead Developers steering the mod's development.
<@&1161418815440166943> - The Moderators overseeing our Discord community.
<@&1156838077344526417> - The Developers team, encompassing Builders, Coders, Modelers, Animators, Texturers, Artists, and SFX creators.
<@&1152958350095556708> - The Helpers, including Testers and Translators, who assist in refining the mod.
<@&1158394423122595910>
<@&1140629154748956813> - The Coders who bring our mod's functionality to life.
<@&1140571231247151124> - The individuals who Model and Texture dragons for our mod.
<@&1158307747197091880> - The animators who breathe life into our mod with their dynamic animations.
<@&1198368991018754158> - The Sound Creators, crafting the immersive audio experience of our mod.
<@&1189315950202323005> - The Artists creating stunning visuals for our mod.
<@&1133422248892579920> - The team building intricate structures within the mod.
<@&1136977180560195584> - The contributors focused on item and model textures visible in the mod.
<@&1138158079553318952> - The translators expanding our mod's reach by adapting it into various languages.
<@&1138158375650218086> - The Testers ensuring the mod's quality and stability.
<@&1239230794044538930> - The GameDesigners ensuring a flawless game idea.
<@&1158395771675213896>
<@&1126224071873548338> - Recognizing those who have contributed at least 5 unique, implemented ideas.
<@&1120034233390473217> - Acknowledging contributors of a unique, implemented idea.
<@&1120091456837779476> - Thanking members for reporting an actual bug from a stable mod version.
<@&1158395515713626172>
<@&1160952417718910986> - Saluting our former mod Developers.
<@&1121551063116419082> - Celebrating everyone who has contributed to the mod in any helpful capacity.
<@&1133457569155920033> - Our Server Boosters, enhancing our server's capabilities.
<@&1142051333449457734> - Admins or higher from our partnered servers.
<@&1120099102298996876> - The universal role for all members of our server.
<@&1120033014416670895> - All the Discord Bots facilitating server operations.
<@&1158393719440031895>
<@&1120087105192874136> - Opt-in notifications for livestream updates of our mod work.
<@&1120090448954921021> - Opt-in notifications for new Sneak peeks.
<@&1120101850683809812> - Opt-in notifications for posting of changelogs.
<@&1133106343822250054> - Opt-in notifications for updates to the wiki.
<@&1124100403055820920> - Opt-in notifications for new polls.
<@&1158394548838477956>
<@&1120089922326499470> - For members who identify as He/Him.
<@&1120089956979847209> - For members who identify as She/Her.
<@&1120090011904249856> - For members who identify as They/Them.
<@&1120090187490398319> - For members with other Pronouns.
<@&1158395282128646166>
<@&1177955420527149056> - Celebrating members who have won an Event or Contest!

More roles may be introduced in the future!

For any inaccuracies, please contact <@397416283835990016>.
    `)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = RolesEmbed;