/**Description:
 * This is an button to display the Faq!
 * src\embed\HTOAD\Information\FaqEmbed.js
 * src\commands\Admin\Information\Information.js
 */

const FaqEmbed = require('../../../../embed/HTOAD/Information/FaqEmbed.js');
const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    customId: 'htoad-faq-button',
    run: async (client, interaction) => {



        await interaction.reply({ embeds: [FaqEmbed], components: [           
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('faq-select')
                        .setPlaceholder('Select what part of the FAQ you would like to view.')
                        .addOptions([
                            { label: 'FAQ', value: 'faq' },
                            { label: 'Milestone', value: 'milestone' },
                            { label: 'Google Drive', value: 'google-drive' },
                        ])
            )], ephemeral: true});




    }
};