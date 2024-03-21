/**Description:
 * This Select is used to display the help categories.
 * src\commands\Public\Help\help.js
 */

const HTOADHelpLinksEmbed = require('../../../HTOAD/embeds/Help/HelpLinksEmbed.js');
const HTOADHelpModEmbed = require('../../../HTOAD/embeds/Help/HelpModEmbed.js');
const RunicHelpLinksEmbed = require('../../../Runic/embeds/Help/HelpLinksEmbed.js');


module.exports = {
    customId: 'help-category',
    run: async (client, interaction) => {

    const value = interaction.values[0];

    if (value === 'htoad-help-category-links') {
        await interaction.reply({
            embeds: [HTOADHelpLinksEmbed],
            ephemeral: true
        });
    } else if (value === 'htoad-help-category-mod') {
        await interaction.reply({
            embeds: [HTOADHelpModEmbed],
            ephemeral: true
        });
    } else if (value === 'runic-help-category-links') {
        await interaction.reply({
            embeds: [RunicHelpLinksEmbed],
            ephemeral: true
        });
    }
}
};