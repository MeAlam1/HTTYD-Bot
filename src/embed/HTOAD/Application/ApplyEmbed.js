const { EmbedBuilder } = require('discord.js');

const HTOADApplyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Which role would you like to have in our team?`)
    .setURL('https://discord.com/channels/1120022058601029652/1120088926737141923/1120095097061658685')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .addFields(
        { name: `***Developer***`, value: `
        **Discord Bot Coder** - The Coders who bring our Bots functionality to life.(Discord.js, Node.js)
        **Website Coder** - The Coders who bring our website's functionality to life.(HTML, CSS, JS)
        **Modeler** - The individuals who Model and Texture dragons for our mod.
        **Animator** - The animators who breathe life into our mod with their dynamic animations.
        **SFX Artist** - The Sound Creators, crafting the immersive audio experience of our mod.
        **Concept Artist** - The Artists creating stunning visuals for our mod.
        **Builder** - The team building intricate structures within the mod.
        **Texture Artist** - The contributors focused on item and model textures visible in the mod.
    ` },
        { name: `***Helper***`, value: `
        **Tester** - The Testers ensuring the mod's quality and stability.
        **Translator** - The translators expanding our mod's reach by adapting it into various languages.
    ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADApplyEmbed;