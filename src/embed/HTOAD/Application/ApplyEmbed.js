/**Description:
 * This embed is used in the command: /apply
 * src\commands\Public\Important\Apply.js
 */

const { EmbedBuilder } = require('discord.js');

const HTOADApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Which role would you like to have in our team?`)
    .setURL('https://discord.com/channels/1120022058601029652/1120088926737141923/1120095097061658685')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png'})
    .addFields(
        { name: `***Developer***`, value: `
        **Discord Bot Coder** - Develops bot features using Discord.js and Node.js.
        **Website Coder** - Builds and maintains website with HTML, CSS, and JS.
        **Modeler** - Creates and textures dragons for the mod.
        **Animator** - Animates mod elements, adding motion and life.
        **SFX Artist** - Designs sound effects for an immersive mod experience.
        **Concept Artist** - Generates visual concepts for the mod.
        **Builder** - Constructs detailed in-mod structures.
        **Texture Artist** - Enhances mod with detailed item and model textures.
        **Game Designer** - Designs the mod's gameplay and mechanics.
    ` },
        { name: `***Helper***`, value: `
        **Tester** - Checks mod for bugs and ensures stability.
        **Translator** - Makes mod accessible in multiple languages.
    ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

module.exports = HTOADApplyEmbed;