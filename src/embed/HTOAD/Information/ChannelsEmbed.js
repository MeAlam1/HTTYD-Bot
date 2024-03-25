/**Description:
 * This embed used in the command: /info
 * src\commands\Admin\Information\Information.js
 */

const { EmbedBuilder } = require('discord.js');

const ChannelsEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Channels!')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
    **Welcome**
    <#1120030527920025650> - A space for sending greetings to newcomers and farewells to departing members.
    <#1182345490101186711> - Discover all the essential links associated with our server.
    <#1120088926737141923> - A detailed guide to every role available on this server.
    <#1157675244404875305> - Descriptions for each channel, helping you navigate our server with ease.

    **Important**
    <#1120026059686019192> - The heart of our server's guidelines. Make sure to read them thoroughly.
    <#1120302121980543007> - Your go-to resource for common questions about our server or the mod. Please consult this before posing queries.
    <#1158314758840270930> - A comprehensive list of all our collaborative partners.
    <#1147986319771967488> - Find all announcements from our partners in this channel.

    **Development**
    <#1120095709060931744> - This channel is where <@&1133420066277437490>  sends out pings to notify everyone when they are actively working on the mod.
    <#1120085724054704258> - Catch a glimpse of what's coming every 3-5 business days, courtesy of <@&1133420066277437490>.
    <#1120026742933958788> - <@&1140629154748956813> posts detailed changelogs here with each new mod release.
    <#1127173809032663110> - The hub for all crucial server/mod announcements.
    <#1152611101893214258> - Explore our planned dragon additions.
    <#1157988227890823289> - Track changes made to the code or Wiki by <@&1140629154748956813> 

    **Bug Report and Suggestions**
    <#1120027440505430076> - Share your ideas and suggestions for mod improvements here.
    <#1176135677247750215> - Report any mod-related problems, like bugs or translation errors.
    <#1126637161400242236> - A private channel for those seeking help or wishing to discuss with <@&1161418815440166943>.
    <#1129499336137519175> - Have a question? Ask us anything (but check the FAQ first).
    <#1120033166279839865> - A dedicated voice channel for assistance with any issues.

    **HTTYD**
    <#1120032046539087986> - The primary general chat dedicated to HTTYD discussions.
    <#1120032310197231646> - An alternate general chat for non-HTTYD topics.
    <#1130864389168316446> - Show off your creations here.

    **Off-topic**
    <#1120032404996890654> - A friendly space to introduce yourself to the community.
    <#1143521037955367052> - Collaboratively complete a song, one line at a time.
    <#1124098888463290399> - Participate in various polls created by <@&1133420066277437490>.

    **Voice Channels**
    <#1120097034431639622> - Join this channel to find someone working on the mod.
    <#1175873957098954893>  - A less formal mod development channel.
    <#1120033591208968264> - For private conversations.
    <#1120033811577716878>  - A general space for chatting.
    <#1120033849708122155> - An additional chat room for when others are full or engaged.

    **Events**

    **Archive**
    <#1136677313967300730> - A look back at the old Helper Applications. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1209137446369886258
    <#1158305505660383232> - A look back at the old Developer Applications. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1209137446369886258
    <#1166785959417884694> - A look back at the Server Banner contest from November 2023.
    <#1148738960693153882> - Reflecting on when <@&1120030006626750474> used to do recaps. This channel was closed, details here: https://discord.com/channels/1120022058601029652/1127173809032663110/1197595787807436880
    <#1123664502995570838> & <#1152747457311146034> - Reminiscing about our Meme channels era. Closure details: https://discord.com/channels/1120022058601029652/1127173809032663110/1198692115429986396
    <#1152747429083492363> - Remembering the times when our showcases were divided into two separate channels. Closed due to: https://discord.com/channels/1120022058601029652/1127173809032663110/1198692115429986396
    <#1199697255993720862> - A look back at the Server Logo contest from February 2024.

    Future channel additions are a possibility!

    For any errors, please contact <@397416283835990016>.
    `)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = ChannelsEmbed;