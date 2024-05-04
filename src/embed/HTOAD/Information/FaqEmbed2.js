/**Description:
 * This embed used in the command: /faq en /info
 * src\commands\Public\MinecraftMod\faq.js
 * src\components\selects\HTOAD\Information\FaqSelect.js
 */

const { EmbedBuilder } = require('discord.js');

const FaqEmbed2 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Frequently Asked Questions (FAQ)')
    .setURL('https://discord.com/channels/1120022058601029652/1221905515798597662')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription(`
*What is this?*
This mod, How to Own a Dragon, is a Minecraft Forge modification inspired by the How to Train Your Dragon series. 
***Note: This is a mod for Minecraft Java Edition, not Bedrock.
It cannot be played on consoles. 
For mobile, an emulator is required.***

*Who's behind the mod?*
@pushedtester21 and @me_alam are the Co-Owners. The Lead Developers are @agent.echo and @another_toaster. We also have numerous @HelperGrunt and @Screaming Dev assisting us.

*How long has the mod been in development?*
Development of How to Own a Dragon began on June 17th, 2023.

*Release date of the mod?*
Currently, there's no set date for the mod's first stable release, but the first alpha version was released on July 17th, 2023.

*Are there beta testers?*
Indeed, we have testers who rigorously check each version for bugs. Each tester is assigned the @Hideous ZippleBug role.

*Can I contribute to the mod?*
Absolutely! There are various ways to contribute: modelling, texturing, animating, translating, testing, or building. For more information or to apply, refer to #helper-application or #dev-application. We welcome all levels of experience.
#helper-application = Tester, Translator.
#dev-application = Modeler, Animator, Texturer, Coder, Builder.

*How can I support the mod financially?*
Yes, while the mod remains free, you can support us financially through our [Patreon](https://www.patreon.com/htoad) or [Ko-Fi](https://ko-fi.com/htoad). Funds will be used for various purposes, including running our server.

*Where can I find more information about the mod?*
For detailed information, visit our Wiki on [Miraheze!](https://howtoownadragon.miraheze.org/wiki/Main_Page)

*How to report a bug?*
To report bugs or translation issues, use #issues or submit them on [The Github](https://github.com/MeAlam1/How-to-Own-a-Dragon/issues).

*Can I help with translations?*
Certainly! You can translate the mod into any language via [The Crowdin](https://crowdin.com/project/how-to-own-a-dragon). Although HTOAD has specific languages targeted for translation, if yours isn't listed, open a ticket, and we'll sort it out. For recognition of your translation work, see #ticket/#guide or 
use /apply in any channel.

*Where to find the mod?*
Find us on our [Curseforge page!](https://curseforge.com/minecraft/mc-mods/how-to-own-a-dragon)

*Trouble downloading the mod?*
If you encounter download issues, first check #"Problems with downloading an Alpha". If the problem persists, create a new thread in #qna.

Last updated: <t:1714830347>
`)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = FaqEmbed2;