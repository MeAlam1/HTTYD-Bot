const HTOADHelpLinksEmbed = require('../../components/embed/HTOAD/HelpLinksEmbed.js');
const RunicHelpLinksEmbed = require('../../components/embed/Runic/HelpLinksEmbed.js');

module.exports = {
    customId: 'help-category',
    run: async (client, interaction) => {
        
    const value = interaction.values[0];

    if (value === 'htoad-help-category-links') {
        await interaction.reply({
            embeds: [HTOADHelpLinksEmbed]
        });
    } else if (value === 'runic-help-category-links') {
        await interaction.reply({
            embeds: [RunicHelpLinksEmbed]
        });
    }
}
};