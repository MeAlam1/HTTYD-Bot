/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to display the information for How to Own a Dragon.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490' // Lead Dev Role
];
const HTOADInformationEmbed = require('../../../embed/HTOAD/Information/InfoEmbed.js');


module.exports = {
    structure: new SlashCommandBuilder()
        .setName('info')
        .setDescription('HTOAD Admin Only.'),
    run: async (client, interaction, args) => {

        const FaqButton = new ButtonBuilder()
         .setCustomId('htoad-faq-button')
         .setLabel('FAQ')
         .setStyle(ButtonStyle.Primary);

        const RulesButton = new ButtonBuilder()
         .setCustomId('htoad-rules-button')
         .setLabel('Rules')
         .setStyle(ButtonStyle.Primary);

        const RolesButton = new ButtonBuilder()
         .setCustomId('htoad-roles-button')
         .setLabel('Role info')
         .setStyle(ButtonStyle.Primary);

        const ChannelsButton = new ButtonBuilder()
         .setCustomId('htoad-channels-button')
         .setLabel('Channel info')
         .setStyle(ButtonStyle.Primary);

        const ContactStaffButton = new ButtonBuilder()
         .setCustomId('htoad-create-ticket-button')
         .setLabel('Contact Staff')
         .setEmoji('🎫')
         .setStyle(ButtonStyle.Secondary);

        const ApplyButton = new ButtonBuilder()
         .setCustomId('htoad-apply-button')
         .setLabel('Apply to HTOAD')
         .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder().addComponents(FaqButton, RulesButton, RolesButton, ChannelsButton, ContactStaffButton, ApplyButton);
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        const channel = client.channels.cache.get(interaction.channelId);

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await channel.send({
                embeds: [HTOADInformationEmbed],
                components: [row]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

