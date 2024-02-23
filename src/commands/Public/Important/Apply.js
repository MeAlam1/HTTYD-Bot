/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command will send the Apply Embed.
 */

const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const HTOADApplyEmbed = require('../../../embed/HTOAD/Application/ApplyEmbed.js');


module.exports = {
    structure: new SlashCommandBuilder()
        .setName('apply')
        .setDescription('Execute this command to Apply for How to Own a Dragon!'),
    run: async (client, interaction, args) => {

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            // How to Own a Dragon
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
                                    { label: 'Translator', value: 'htoad-apply-translator'}
                                )
                        )
                ],
                ephemeral: true
            });
        } else {
            await interaction.reply({
                // This command is not available in this server.
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

