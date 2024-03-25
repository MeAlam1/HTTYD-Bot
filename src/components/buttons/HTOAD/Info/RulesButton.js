/**Description:
 * This is an button to display the Rules!
 * src\embed\HTOAD\Information\RulesEmbed.js
 * src\commands\Admin\Information\Information.js
 */

const RulesEmbed = require('../../../../embed/HTOAD/Information/RulesEmbed.js');

module.exports = {
    customId: 'htoad-rules-button',
    run: async (client, interaction) => {
        await interaction.reply({ embeds: [RulesEmbed], ephemeral: true});
    }
};