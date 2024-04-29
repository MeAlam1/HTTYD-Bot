/**Description:
 * This is a Select Menu 
 * src\commands\Public\Important\Apply.js
 */

const FaqEmbed2 = require('../../../../embed/HTOAD/Information/FaqEmbed2.js');
const MilestoneEmbed = require('../../../../embed/HTOAD/Information/MilestoneEmbed.js');

module.exports = {
    customId: 'faq-select',
    run: async (client, interaction) => {
        
        const value = interaction.values[0];
            
        if (value === 'faq') {
            await interaction.reply({
                embeds: [FaqEmbed2],
                ephemeral: true
            });
        } else if (value === 'milestone') {
            await interaction.reply({
                embeds: [MilestoneEmbed],
                ephemeral: true
            });
        }

    }
};