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
    <@578557512983511057> and <@397416283835990016> are the Co-Owners. The Lead Developers are <@751818438879608843> and <@798910386907906068>. We also have numerous <@&1152958350095556708> and <@&1156838077344526417> assisting us.

    *How long has the mod been in development?*
    Development of How to Own a Dragon began on June 17th, 2023.

    *Release date of the mod?*
    Currently, there's no set date for the mod's first stable release, but the first alpha version was released on July 17th, 2023.

    *Are there beta testers?*
    Indeed, we have testers who rigorously check each version for bugs. Each tester is assigned the <@&1138158375650218086> role.

    *Can I contribute to the mod?*
    Absolutely! There are various ways to contribute: modelling, texturing, animating, translating, testing, or building. For more information or to apply, refer to <#1136677313967300730> or <#1158305505660383232>. We welcome all levels of experience.
    <#1136677313967300730> = Tester, Translator.
    <#1158305505660383232> = Modeler, Animator, Texturer, Coder, Builder.

    *How can I support the mod financially?*
    Yes, while the mod remains free, you can support us financially through our [Patreon](https://www.patreon.com/htoad) or [Ko-Fi](https://ko-fi.com/htoad). Funds will be used for various purposes, including running our server.

    *Where can I find more information about the mod?*
    For detailed information, visit our Wiki on [Miraheze!](https://howtoownadragon.miraheze.org/wiki/Main_Page)

    *How to report a bug?*
    To report bugs or translation issues, use <#1176135677247750215> or submit them on [The Github](https://github.com/MeAlam1/How-to-Own-a-Dragon/issues).

    *Can I help with translations?*
    Certainly! You can translate the mod into any language via [The Crowdin](https://crowdin.com/project/how-to-own-a-dragon). Although HTOAD has specific languages targeted for translation, if yours isn't listed, open a ticket, and we'll sort it out. For recognition of your translation work, see <#1136677313967300730> or <#1126637161400242236>.

    *Where to find the mod?*
    Find us on our [Curseforge page!](https://curseforge.com/minecraft/mc-mods/how-to-own-a-dragon)

    *Trouble downloading the mod?*
    If you encounter download issues, first check <#1150041146828013568>. If the problem persists, create a new thread in <#1129499336137519175>.

    Last updated: <t:1706185176>
`)
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = FaqEmbed2;