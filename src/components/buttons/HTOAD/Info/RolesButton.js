/**Description:
 * This is an button to display the Roles!
 * src\embed\HTOAD\Information\RolesEmbed.js
 * src\commands\Admin\Information\Information.js
 */

const RolesEmbed = require('../../../../embed/HTOAD/Information/RolesEmbed.js');

module.exports = {
    customId: 'htoad-roles-button',
    run: async (client, interaction) => {
        await interaction.reply({ embeds: [RolesEmbed], ephemeral: true});
    }
};