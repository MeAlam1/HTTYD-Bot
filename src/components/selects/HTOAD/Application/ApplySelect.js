module.exports = {
    customId: 'apply-category',
    run: async (client, interaction) => {
        
    const value = interaction.values[0];

    if (value === 'htoad-apply-discord-bot-coder') {
        await interaction.reply({
            content: 'You have selected the `Discord Bot Coder` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-website-coder') {
        await interaction.reply({
            content: 'You have selected the `Website Coder` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-modeler') {
        await interaction.reply({
            content: 'You have selected the `Modeler` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-animator') {
        await interaction.reply({
            content: 'You have selected the `Animator` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-sfx-artist') {
        await interaction.reply({
            content: 'You have selected the `SFX Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-concept-artist') {
        await interaction.reply({
            content: 'You have selected the `Concept Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-builder') {
        await interaction.reply({
            content: 'You have selected the `Builder` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-texture-artist') {
        await interaction.reply({
            content: 'You have selected the `Texture Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-tester') {
        await interaction.reply({
            content: 'You have selected the `Tester` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-translator') {
        await interaction.reply({
            content: 'You have selected the `Translator` role.',
            ephemeral: true
        });
    }
}
};