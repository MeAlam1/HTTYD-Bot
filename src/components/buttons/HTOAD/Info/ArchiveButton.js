/**Description:
 * This is an button to display the RoleArchive!
 * src\components\buttons\HTOAD\Info\ChannelsButton.js
 * src\commands\Admin\Information\Information.js
 */

const ArchiveEmbed = require('../../../../embed/HTOAD/Information/ArchiveEmbed.js');

module.exports = {
    customId: 'htoad-roles-button',
    run: async (client, interaction) => {
        await interaction.reply({ embeds: [ArchiveEmbed], ephemeral: true});
    }
};