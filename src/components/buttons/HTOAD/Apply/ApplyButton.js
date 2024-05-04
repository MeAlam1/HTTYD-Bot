/**Description:
 * This button is to apply to How to Own a Dragon.
 * src\commands\Admin\Information\Information.js
 */

const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const HTOADApplyEmbed = require('../../../../embed/HTOAD/Application/ApplyEmbed.js');

module.exports = {
    customId: 'htoad-apply-button',
    run: async (client, interaction) => {

        await interaction.reply({
            embeds: [HTOADApplyEmbed],
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('apply-category')
                            .setPlaceholder(`Roles`)
                            .addOptions(
                                { label: 'Discord Bot Coder', value: 'htoad-apply-discord-bot-coder'},
                                { label: 'Website Coder', value: 'htoad-apply-website-coder'},
                                { label: 'Modeler', value: 'htoad-apply-modeler'},
                                { label: 'Animator', value: 'htoad-apply-animator'},
                                { label: 'SFX Artist', value: 'htoad-apply-sfx-artist'},
                                { label: 'Concept Artist', value: 'htoad-apply-concept-artist'},
                                { label: 'Builder', value: 'htoad-apply-builder'},
                                { label: 'Texture Artist', value: 'htoad-apply-texture-artist'},
                                { label: 'Tester', value: 'htoad-apply-tester'},
                                { label: 'Translator', value: 'htoad-apply-translator'},
                                { label: 'Game Designer', value: 'htoad-apply-game-design'}
                            )
                    )
            ],
            ephemeral: true
        });

    }
};