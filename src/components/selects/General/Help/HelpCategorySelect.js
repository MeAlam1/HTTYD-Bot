/**Description:
 * This Select is used to display the help categories.
 * src\commands\Public\Help\help.js
 */

const HTOADHelpLinksEmbed = require('../../../../embed/HTOAD/Help/HelpLinksEmbed.js');
const HTOADHelpModEmbed = require('../../../../embed/HTOAD/Help/HelpModEmbed.js');
const RunicHelpLinksEmbed = require('../../../../embed/Runic/Help/HelpLinksEmbed.js');


module.exports = {
    customId: 'help-category',
    run: async (client, interaction) => {
    
    // The selected category.
    const value = interaction.values[0];

    // To reply with the selected category.
    if (value === 'htoad-help-category-links') {
        // The help links category for How to Own a Dragon.
        await interaction.reply({
            embeds: [HTOADHelpLinksEmbed],
            ephemeral: true
        });
    } else if (value === 'htoad-help-category-mod') {
        // The mod category for How to Own a Dragon.
        await interaction.reply({
            embeds: [HTOADHelpModEmbed],
            ephemeral: true
        });
    } else if (value === 'runic-help-category-links') {
        // The help links category for Runic Isles.
        await interaction.reply({
            embeds: [RunicHelpLinksEmbed],
            ephemeral: true
        });
    }
}
};