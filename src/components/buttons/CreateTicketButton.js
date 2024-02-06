const { ChannelType, PermissionFlagsBits } = require('discord.js');
const HTOADFirstMessageTicketEmbed = require('../../components/embed/HTOAD/Ticket/FirstMessageTicketEmbed.js');

module.exports = {
    customId: 'create-ticket-button',
    run: async (client, interaction) => {
        const categoryId = '1126638959716470886'; 
        const channelName = `ticket-${interaction.user.username.replace(/\s+/g, '-').toLowerCase()}`;

        interaction.guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
            parent: categoryId, 
            permissionOverwrites: [
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages], 
                },
                {
                    id: interaction.guild.roles.everyone,
                    deny: [PermissionFlagsBits.ViewChannel],
                },
            ],
        }).then(channel => {
            interaction.reply({
                content: `Your ticket has been created! <#${channel.id}>`,
                ephemeral: true
            });

            channel.send({ embeds: [HTOADFirstMessageTicketEmbed] });
        }).catch(console.error);
    }
};
