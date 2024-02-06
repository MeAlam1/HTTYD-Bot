const HTOADHelpLinksEmbed = require('../embed/HTOAD/Help/HelpLinksEmbed.js');
const HTOADHelpModEmbed = require('../embed/HTOAD/Help/HelpModEmbed.js');
const RunicHelpLinksEmbed = require('../embed/Runic/Help/HelpLinksEmbed.js');


module.exports = {
    customId: 'help-category',
    run: async (client, interaction) => {
        
    const value = interaction.values[0];

    if (value === 'htoad-help-category-links') {
        await interaction.reply({
            embeds: [HTOADHelpLinksEmbed]
        });
    } else if (value === 'htoad-help-category-mod') {
        await interaction.reply({
            embeds: [HTOADHelpModEmbed]
        });
    } else if (value === 'runic-help-category-links') {
        await interaction.reply({
            embeds: [RunicHelpLinksEmbed]
        });
    }
}
};